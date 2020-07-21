import React from 'react';
import styled from 'styled-components';
import Logo from '../Components/animate/Animation';
import Coffee from '../Components/animate/Coffee';

const Header = () => {
  return (
    <Wrapper>
      {/* <div className='title'>
       
      </div> */}
      <div className='content'>
        <h1>portfolio</h1>
        {/* <span className='screw screw_1 '>
          <i class='fas fa-plus-circle'></i>
        </span>
        <span className='screw screw_2'>
          <i class='fas fa-plus-circle'></i>
        </span>
        <span className='screw screw_3'>
          <i class='fas fa-plus-circle'></i>
        </span>
        <span className='screw screw_4'>
          <i class='fas fa-plus-circle'></i>
        </span> */}
        {/* <Logo />

        <div className='overflow'></div> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;

  .content {
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 40px;
    .screw {
      position: absolute;
      height: 3rem;
      width: 3rem;
      border-radius: 100%;
      box-shadow: inset 5px 9px 12px rgba(0, 0, 0, 0.05), inset -5px -9px 12px rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.2);
    }
    .screw_1 {
      top: 1rem;
      left: 1rem;
      transform: rotate(30deg);
    }
    .screw_2 {
      top: 1rem;
      right: 1rem;
      transform: rotate(10deg);
    }
    .screw_3 {
      bottom: 1rem;
      left: 1rem;
      transform: rotate(45deg);
    }
    .screw_4 {
      bottom: 1rem;
      right: 1rem;
      transform: rotate(5deg);
    }
    /* box-shadow: 10px 15px 20px #adadad, -10px -15px 20px #ffffff; */
    background: linear-gradient(145deg, #ececec, #c7c7c7);
    box-shadow: 30px 30px 38px #bcbcbc, -30px -30px 38px #fefefe;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* box-shadow: 0 0 3px 3px #dddddd, 6px 6px 8px 4px rgba(136, 136, 136, 0.7), -6px -6px 8px 4px rgba(244, 244, 244, 0.7); */
    .overflow {
      position: absolute;
      height: 100%;
      width: 100%;
      transition: 500ms;
      opacity: 0.1;
      top: 0;
      left: 0;
      background-color: #122438;
    }
    h1 {
      text-transform: uppercase;
      font-size: 10rem;
      font-family: Helvetica, Arial, sans-serif;
      color: #ddd;
      /* text-shadow: -9px -9px 14px #fff, 9px 9px 14px #cbced1; */
      text-shadow: 5px 9px 12px rgba(0, 0, 0, 0.05), -5px -9px 12px rgba(255, 255, 255, 0.5);
      /* text-shadow: 5px 9px 12px #adadad, -5px -9px 12px #ffffff; */
      caret-color: #000;
      outline: none;
    }
    &:hover {
      /* cursor: pointer; */
      transition: 300ms;
      /* box-shadow: 0px 2px 5px #adadad, 0px -2px 5px #ffffff; */
      .overflow {
        /* background-color: rgba(244, 244, 244, 0.5); */
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    margin: 3rem auto;
    height: 40vh;
    .content {
      h1 {
        font-size: 7rem;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    height: 30vh;
    .content {
      h1 {
        font-size: 3rem;
        color: #999;
      }
    }
  }
`;
export default Header;
