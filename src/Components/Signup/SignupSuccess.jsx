import React from 'react';
import success from '../../assets/images/Sample Images/user.jpg';


const SignupSuccess = () => {
  return (
    <div className='form-content-right'>
      <div className='form-success'>We've Recieved Your Request</div>
      <img src={success} alt='success' className='form-img-2' />
    </div>
  );
};

export default SignupSuccess;
