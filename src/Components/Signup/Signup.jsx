import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
import {
  Form,
  FormContentRight,
  FormH1,
  FormInput,
  FormInputButton,
  FormInputLogin,
  FormInputLoginA,
  FormInputs,
  FormLabel,
  FormP,
} from './SignupElements';

const Signup = ({ submitForm }) => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    toggleLogin,
    isLogin,
  } = useForm(submitForm, validate);
  return (
    <FormContentRight>
      <Form onSubmit={handleSubmit}>
        {isLogin ? (
          <FormH1>Please Login</FormH1>
        ) : (
          <FormH1>Get started with us today, Sign Up</FormH1>
        )}
        {!isLogin && (
          <FormInputs>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput
              id='username'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <FormP>{errors.username}</FormP>}
          </FormInputs>
        )}
        <FormInputs>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput
            id='email'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <FormP>{errors.email}</FormP>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <FormInput
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <FormP>{errors.password}</FormP>}
        </FormInputs>
        {!isLogin && (
          <FormInputs>
            <FormLabel htmlFor='password2'>Confirm Password</FormLabel>
            <FormInput
              id='password2'
              type='password'
              name='password2'
              className='form-input'
              placeholder='Enter your Password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <FormP>{errors.password2}</FormP>}
          </FormInputs>
        )}

        <FormInputButton type='submit' >{!isLogin ? 'Sign Up' : 'Login' }</FormInputButton>

        <FormInputLogin>
          {isLogin ? 'Dont ' : 'Already '} have an account?{' '}
          {isLogin ? 'Sign Up ' : 'Login '}
          <FormInputLoginA href='#' onClick={toggleLogin}>
            here
          </FormInputLoginA>
        </FormInputLogin>
      </Form>
    </FormContentRight>
  );
};

export default Signup;
