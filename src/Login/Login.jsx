import React from 'react';
import { Wrapper } from './styled';
const Login = () => {
  return (
    <Wrapper>
      <div className='limiter'>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='login-form validate-form'>
              <span className='login-formtitle'>Welcome</span>
              <div className='wrap-input validate-input'>
                <input placeholder='Email' type='email' name='email' className='input' />
                <span className='focus-input'></span>
              </div>
              <div className='wrap-input validate-input'>
                <span className='btn-show-pass'>
                  <i className='zmdi zmdi-eye'></i>
                </span>
                <input type='password' placeholder='Password' name='password' className='input' />
                <span className='focus-input'></span>
              </div>
              <div className='container-login-form-btn'>
                <div className='wrap-login-form-btn'>
                  <button className='login-form-btn'> Login</button>
                </div>
              </div>
              <div className='text-center'>
                <span className='txt1'>Don't have an account</span>
                <a href='#' className='txt2'>
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
