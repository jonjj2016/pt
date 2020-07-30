import React from 'react';
import styled from 'styled-components';

const NavButton = ({ children, ...props }) => {
  return (
    <NavBtn {...props}>
      <div className='inner'>{children}</div>
    </NavBtn>
  );
};
const NavBtn = styled.a`
  &:link,
  &:visited {
    display: block;

    color: inherit;
    text-decoration: none;

    border: none;
    background-color: transparent;
    height: 4rem;
    width: 80%;
    font-size: 2rem;
    box-sizing: border-box;
    padding: 1rem 3rem;
    color: #dddddd;
    font-weight: bolder;
    cursor: pointer;
    transition: 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    padding: 2rem;
    border-radius: 20px;
    margin: 1rem;
    box-shadow: 5px 9px 12px rgba(0, 0, 0, 0.3), -5px -9px 12px rgba(255, 255, 255, 0.05);
  }
  /* box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5), -2px -4px 8px rgba(255, 255, 255, 0.05); */
  /* box-shadow: 1px 2px 3px #1b2d40, -1px -2px 3px #a0a7af; */
  /* .inner {
    box-shadow: inset 1px 2px 5px #c6cacf, inset -1px -2px 5px #c6cacf;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  } */

  &:hover {
    box-shadow: 9px 9px 20px rgba(0, 0, 0, 0.5), -9px -9px 20px rgba(255, 255, 255, 0.05);
    /* box-shadow: 4px 9px 12px rgba(0, 0, 0, 0.5), -4px -9px 12px rgba(255, 255, 255, 0.05); */
  }
`;
export default NavButton;
