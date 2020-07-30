import React from 'react';
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';

const Skills = () => {
  const skills = ['JavaScript', 'HTML/CSS', 'Reactjs', 'Redux', 'Redux-Saga', 'SementicUI', 'NodeJs', 'Express', 'MongoDb', 'SocketIo'];
  return (
    <Skills_Wrapper>
      <h2>Skills</h2>
      <div className='skills'>
        <Flip top cascade>
          {skills.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </Flip>
      </div>
    </Skills_Wrapper>
  );
};
const Skills_Wrapper = styled.div`
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  width: 100%;
  padding: 2rem;
  h2 {
    font-size: 7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 900;

    text-align: center;
    text-shadow: 4px 7px 12px rgba(0, 0, 0, 0.1), -4px -7px 12px rgba(255, 255, 255, 0.5);
    color: #ddd;
  }
  .skills {
    box-sizing: border-box;
    line-height: 1;
    color: 777;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    /* text-shadow: 4px 7px 12px rgba(0, 0, 0, 0.1), -4px -7px 12px rgba(255, 255, 255, 0.5); */
    font-size: 0.7rem;
    grid-gap: 1.5rem;
    font-weight: 900;
    color: #6a6a6a;
    div {
      margin: 1rem;
      letter-spacing: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 20px;
      box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.05), -4px -7px 12px rgba(255, 255, 255, 0.5);
    }
  }
  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 4rem;
    }
    .skills {
      grid-gap: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 4rem;
    }
    .skills {
      grid-gap: 1rem;
      font-size: 0.6rem;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      div {
        margin: 0.5rem;
        letter-spacing: 2px;
        padding: 1rem;
      }
    }
  }
`;
export default Skills;
