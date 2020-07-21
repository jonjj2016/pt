import React from 'react';
import styled from 'styled-components';

const Button = ({ children, props }) => {
  return <Btn {...props}>{children}</Btn>;
};
const Btn = styled.button`
  /*  */
  border: none;
  background-color: transparent;
  height: 3rem;
  font-size: 1rem;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 1rem 3rem;
  color: #777;
  font-weight: bolder;
  cursor: pointer;
  transition: 400ms;
  letter-spacing: 1px;
  outline: none;
  width: 100%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.05), -2px -4px 8px rgba(255, 255, 255, 0.5);
  transition: box-shadow 400ms cubic-bezier(0.23, 1, 0.32, 1) !important;
  &:hover {
    box-shadow: 4px 9px 12px rgba(0, 0, 0, 0.05), -4px -9px 12px rgba(255, 255, 255, 0.5);
    /* box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.05), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6); */
  }
  /* &:hover {
    padding: 1rem;
    box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.05), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
  } */
`;

export default Button;
