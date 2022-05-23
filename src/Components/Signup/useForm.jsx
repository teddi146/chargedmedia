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

  const toggleLogin = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
    console.log(isLogin);
  };
  const context = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

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

    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
       
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (resData.data.login.token) {
          context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration,
          );
           toggleLogin()
        }
        // console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
