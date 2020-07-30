import React, { useState } from 'react';
import { Wrapper } from './styled';
import StyleHoc from '../../HOC/animate.hox';
import Button from '../Button/Button';
import NavBtn from '../Button/NavButton';
import Skills from '../Skills/Skills';
import emailjs from 'emailjs-com';

const Features = () => {
  const [state, setState] = useState({
    email: '',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'jontemplate', '#contact__form', 'user_y2GL4peI5nj5c4zFivgVf').then((res) => {
      if (res.text === 'OK') {
        setState({
          email: '',
          message: '',
        });
      }
    });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <Wrapper>
      <div className='container'>
        <div className='item-a item'>
          <h2>
            J<span>M</span>
          </h2>
        </div>
        <div className='item-b item form'>
          <h2>get in touch</h2>
          <p>
            If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to <a href='mailto:darkdevmountain@gmail.com'>darkdevmountain@gmail.com</a> and ~let's talk.
          </p>
          <form onSubmit={onSubmit} id='contact__form'>
            <input name='email' onChange={onChange} value={state.email} placeholder='Your Email...' type='text' />
            <textarea name='message' onChange={onChange} value={state.message} placeholder='Your Message...' id='' cols='30' rows='10'></textarea>
            <Button>Send</Button>
          </form>
        </div>
        <div className='item-c item'>
          <Skills />
        </div>

        <div className='item-d item'>
          <div className='info'>
            <div>
              <i className='fas fa-user-secret'></i> Jon Martirosyan
            </div>
            <div>
              <i className='far fa-envelope'></i> <a href='mailto:darkdevmountain@gmail.com'>darkdevmountain@gmail.com</a>
            </div>
            <div>
              <i className='fas fa-mobile-alt'></i>
              <a href='tel:+861-592-866-1440'> 159-28-661-440</a>
            </div>
            <div>
              <i className='far fa-address-book'></i> Chengdu Sichuan China
            </div>
          </div>
          <div className='buttons'>
            <NavBtn href='https://github.com/jonjj2016'>
              <i className='fab fa-github'></i>
            </NavBtn>
            <NavBtn href='https://www.linkedin.com/in/jon-martirosyan-3649381b2/'>
              <i className='fab fa-linkedin'></i>
            </NavBtn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
