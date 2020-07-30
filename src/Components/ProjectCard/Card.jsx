import React from 'react';
import StyleHoc from '../../HOC/animate.hox';
import styled from 'styled-components';
import Btn from '../Button/Btn';

const Card = ({ isImage, webUrl, url, main = false }) => {
  return (
    <StyleHoc>
      <Wrappper main={main}>
        <span className='hide'>
          <Btn url={webUrl} link clName={'fas fa-angle-double-right'} />
        </span>
        <div className='sticky'></div>
        {!isImage && <video muted autoPlay loop src={url} />}
        {isImage && <img src={url} />}
      </Wrappper>
    </StyleHoc>
  );
};
const Wrappper = styled.div`
  overflow: hidden;
  background: linear-gradient(145deg, #ececec, #c7c7c7);
  box-shadow: ${({ main }) => (main ? ' 30px 30px 38px #bcbcbc, -30px -30px 38px #fefefe' : '30px 30px 38px #bcbcbc,  -10px -30px 38px #fefefe')};
  /* box-shadow: 9px 15px 20px rgba(0, 0, 0, 0.1), -9px -15px 20px rgba(255, 255, 255, 0.5); */
  border-radius: 20px;
  position: relative;
  height: ${({ main }) => (main ? '70vh' : '40vh')};
  margin: 2rem 0;
  cursor: pointer;
  padding: ${({ main }) => (main ? '2rem' : '1rem')};
  box-sizing: border-box;
  .hide {
    opacity: 0.6;
    transition: 100ms;
  }
  img {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
    width: 100%;
    opacity: 0.9;
  }
  video {
    object-fit: cover;
    position: relative;
    background: linear-gradient(145deg, #ececec, #c7c7c7);
    /* box-shadow: inset 9px 15px 20px rgba(0, 0, 0, 0.7), inset -9px -15px 20px rgba(255, 255, 255, 0.7); */
    height: 100%;
    border-radius: 20px;
    width: 100%;
    opacity: 0.9;
    &::before {
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      content: '';
      top: 0;
      left: 0;
      background-color: #122438;
    }
  }
  &:hover {
    .hide {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 750px) {
    border-radius: 10px;
    height: ${({ main }) => (main ? '30vh' : '30vh')};
    padding: 0.7rem;
    margin: 1rem 0;
    video {
      border-radius: inherit;
    }
  }
`;
export default Card;
