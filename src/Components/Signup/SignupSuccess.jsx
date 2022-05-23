import React from 'react';
import success from '../../images/icons/img-success.svg';
import { FormContentRight, FormImg2, FormSuccess } from './SignupElements';

const SignupSuccess = () => {
  return (
    <FormContentRight>
      <FormSuccess>We've Recieved Your Request</FormSuccess>
      <FormImg2 src={success} alt='success' />
    </FormContentRight>
  );
};

export default SignupSuccess;
