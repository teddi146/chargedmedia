import React, { useContext, useState } from 'react';
import SignupSuccess from './SignupSuccess';
import login from '../../assets/images/Sample Images/user.jpg';
import {
  CloseBtn,
  FormContainer,
  FormContentLeft,
  FormImg,
} from './SignupElements';
import Signup from './Signup';
import AuthContext from '../../Context/authContext';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <FormContainer>
        {/* <CloseBtn>x</CloseBtn> */}
        <FormContentLeft>
          <FormImg src={login} alt='login' />
        </FormContentLeft>
        {/* {!isSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess />} */}
        {/* <Signup submitForm={submitForm} /> */}
      </FormContainer>
    </>
  );
};

export default Form;
