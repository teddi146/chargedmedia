import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';

const Signup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, toggleLogin, isLogin } =
    useForm(submitForm, validate);

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        {isLogin ? (
          <h1>Please Enter Your Login Details</h1>
        ) : (
          <h1>Get started with us today, fill out form</h1>
        )}
        {!isLogin && (
          <div className='form-inputs'>
            <label htmlFor='username' className='form-label'>
              Username
            </label>
            <input
              id='username'
              type='text'
              name='username'
              className='form-input'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
        )}

        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          {errors.auth && <p>{errors.auth}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {!isLogin && (
          <div className='form-inputs'>
            <label htmlFor='password2' className='form-label'>
              Confirm Password
            </label>
            <input
              id='password2'
              type='password'
              name='password2'
              className='form-input'
              placeholder='Enter your Password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
        )}

        <button className='form-input-btn' type='submit'>
          {!isLogin ? 'Sign Up' : 'Login'}
        </button>
        <span className='form-input-login'>
          {isLogin ? 'Dont ' : 'Already '}
          have an account? {isLogin ? ' Login ' : ' Signup '}
          <a href='#' onClick={toggleLogin}>
            here
          </a>
        </span>
      </form>
    </div>
  );
};

export default Signup;
