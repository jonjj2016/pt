import React from 'react';
import styled from 'styled-components';

const Btn = ({ onClick, link, clName, url }) => {
  return (
    <Btn_Style onClick={onClick} link={link}>
      <a href={url} target='_blank'>
        <i className={clName}></i>
      </a>
    </Btn_Style>
  );
};
const Btn_Style = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 10%;
  right: 10%;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: #777;
  a {
    text-decoration: none;
    color: inherit;
  }
  background-color: #ddd;
  box-shadow: ${({ link }) =>
    link
      ? `
  0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.05), inset 0 0 5px -1px rgba(255, 255, 255, 0.08), inset 0 20px 30px 0px rgba(255, 255, 255, 0.2)
  `
      : `
  0 15px 25px -4px rgba(0, 0, 0, 0.15), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.02), 0 -10px 15px -1px rgba(255, 255, 255, 0.5), inset 0 0 5px -1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0px rgba(255, 255, 255, 0.2)
  `};
  i {
    opacity: 0.8;
    display: block;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    box-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 1px #fff;
  }
  transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  &:hover {
    box-shadow: ${({ link }) =>
      link
        ? `
  0 15px 25px -4px rgba(0, 0, 0, 0.15), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.05), inset 0 8px 20px 0 rgba(0, 0, 0, 0.5), inset 0 0 5px 1px rgba(255, 255, 255, 0.6)
  `
        : `
      0 15px 25px -4px rgba(0, 0, 0, 0.15), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6)
  `};
  }
`;
export default Btn;
