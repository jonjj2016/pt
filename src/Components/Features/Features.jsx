import React from 'react';
import { Wrapper } from './styled';
import StyleHoc from '../../HOC/animate.hox';
import Button from '../Button/Button';
import NavBtn from '../Button/NavButton';
import Skills from '../Skills/Skills';

const Features = () => {
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
          <form>
            <input placeholder='Your Email...' type='text' />
            <textarea placeholder='Your Message...' name='' id='' cols='30' rows='10'></textarea>
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
            <NavBtn>
              <i className='fab fa-github'></i>
            </NavBtn>
            <NavBtn>
              <i className='fab fa-linkedin'></i>
            </NavBtn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
