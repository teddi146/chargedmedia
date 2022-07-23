import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../Context/authContext';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const context = useContext(AuthContext);

  const toggleLogin = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
    console.log(isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(isLogin, values));
    setIsSubmitting(true);

    const validation = validate(isLogin, values);

    if (!(Object.keys(validation).length === 0)) {
      console.log('validation met: ');
      return;
    }

    let requestBody = {
      query: `
          query Login($email: String!, $password: String!){
            login(email: $email, password: $password) {
              userId
              token
              tokenExpiration
            }
          }
        `,
      variables: {
        email: values.email,
        password: values.password,
      },
    };

    if (!isLogin) {
      requestBody = {
        query: `
            mutation CreateUser($email: String!, $password: String!){
              createUser(userInput: {email:  $email, password: $password}) {
                _id
                email
              }
            }
          `,
        variables: {
          email: values.email,
          password: values.password,
        },
      };
    }

    // console.log(requestBody);

    fetch('http://localhost:5001/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (
          res.status !== 200 &&
          res.status !== 201 &&
          (res.status === 500 || res.status === 400)
        ) {
          const err = 'Server Failed to Authenticate';
          setErrors({ authErr: err });
          // throw new Error('Server Failed to Authenticate');
        }

        return res.json();
      })
      .then((resData) => {
        console.log('resData:', resData);

        if (resData.errors) {
          const err = () =>
            resData.errors[0].message === 'User does not exist!'
              ? setErrors({
                  email: resData.errors[0].message,
                })
              : resData.errors[0].message === 'Password is incorrect'
              ? setErrors({
                  password: resData.errors[0].message,
                })
              : '';
          err().then((_) => {
            throw new Error(errors.errors.message);
          });
        }

        if (resData.data.login.token) {
          context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration,
          );
          toggleLogin();
        }
      })
      .catch((err) => {
        // console.log('catchErr', err);
        console.log('errors', errors);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    console.log('uE', errors);
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    toggleLogin,
    values,
    errors,
    isLogin,
  };
};

export default useForm;
