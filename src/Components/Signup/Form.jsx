import React, { useContext, useState } from 'react';
// import SignupSuccess from './SignupSuccess';
import login from '../../assets/images/Sample Images/user.jpg';
import Signup from './Signup';
import AuthContext from '../../Context/authContext';

import './form.css';
import Spinner from '../Spinner/Spinner';

const Form = ({ toggleModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const context = useContext(AuthContext);

  function submitForm() {
    setIsSubmitted(true);
    if (!context.token) setIsSubmitted(false);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            className='form-btn-wrapper'
          >
            <span className='form-close-btn' onClick={toggleModal}>
              x
            </span>
          </div>
          <img src={login} alt='spaceship' className='form-img' />
        </div>
        {!isSubmitted ? (
          <Signup submitForm={submitForm} />
        ) : context.token ? (
          <Spinner />
        ) : (
          ''
        )}
      </div>
    </>
    // <>
    //   <FormContainer>
    //     {/* <CloseBtn>x</CloseBtn> */}
    //     <FormContentLeft>
    //       <FormImg src={login} alt='login' />
    //     </FormContentLeft>
    //     {!isSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess />}
    //     {/* <Signup submitForm={submitForm} /> */}
    //   </FormContainer>
    // </>
  );
};

export default Form;
