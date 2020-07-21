import React from 'react';
import StyleHoc from '../../HOC/animate.hox';
import styled from 'styled-components';

const Title = () => {
  return (
    <Wrapper>
      {/* <h2>Jon Martirosyan</h2> */}
      <StyleHoc>
        <h2>Full Stack JavaScript Developer</h2>
      </StyleHoc>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 30vh;
  width: 100%;
  border-radius: 20px;
  margin: 5rem 0;
  box-sizing: border-box;
  background-color: #122438;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 9px 12px rgba(0, 0, 0, 0.05), -5px -9px 12px rgba(255, 255, 255, 0.5) !important;
  h2 {
    text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.5), -2px -4px 12px rgba(255, 255, 255, 0.05);
    font-size: 6rem;
    color: #122438;
    transition: 400ms;
    &:hover {
      text-shadow: 5px 9px 12px rgba(0, 0, 0, 0.5), -5px -9px 12px rgba(255, 255, 255, 0.05);
    }
    text-align: center;
    cursor: pointer;
    letter-spacing: 3px;
    /* color: #122438; */
    padding: 1rem;
  }
  @media only screen and (max-width: 750px) {
    margin: 2rem 0;
    h2 {
      font-size: 4rem;
    }
  }
  @media only screen and (max-width: 450px) {
    margin: 1rem 0;

    h2 {
      font-size: 3rem;
    }
  }
`;
export default Title;
