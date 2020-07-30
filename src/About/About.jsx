import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Components/ProjectCard/ProjectCard';

const About = () => {
  return (
    <Wrapper>
      {/* <Background>
        <div className='neumorph_1 neu'></div>
        <div className='neumorph_2 neu'></div>
        <div className='neumorph_3 neu'>
          <div className='inner'></div>
        </div>
      </Background> */}
      <div className='title'>
        <h2>Lorem, ipsum dolor.</h2>
        <div>
          <p>Nowadays if you want to grow your bussiness or start new one you have to have web application to reach to your customers or audience</p>
          <div>
            <strong>I'm here to help you help you to build one</strong> <br />
            With the combination of the art of design and science of programming build robust Web application.
            {/* With the use of latest technologies i can build robust Web application which will be easy to maintain and consistent across multiple platform */}
            <ul>
              <li>Enhance application for maximum speed and scalability</li>
              <li>Develop new user facing features</li>
              <li>Write reusable code and libraries</li>
              <li>Translate UI/UX design wireframes to actual code</li>
              <li>designing and create tools which help to boost production time and efficiency of the code.</li>
            </ul>
          </div>
          <h2>Your Time is my priority.</h2>
        </div>
      </div>
      {/* <ProjectCard /> */}
    </Wrapper>
  );
};
const Background = styled.div`
  color: #eee;
  width: 100%;
  position: absolute;
  /* background-color: #333; */

  height: 100%;
  display: flex;
  box-sizing: border-box;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  .neu {
    width: 20rem;
    height: 20rem;
    /* background-color: #999; */
  }
  .neumorph_1 {
    border-radius: 40px;
    background: linear-gradient(145deg, #ececec, #c7c7c7);
    box-shadow: 30px 30px 38px #bcbcbc, -30px -30px 38px #fefefe;
  }
  .neumorph_2 {
    border-radius: 40px;
    background: #dddddd;
    box-shadow: inset 30px 30px 38px #bcbcbc, inset -30px -30px 38px #fefefe;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .neumorph_3 {
    border-radius: 100%;
    box-sizing: border-box;
    background: linear-gradient(145deg, #c7c7c7, #ececec);
    box-shadow: 30px 30px 38px #bcbcbc, -30px -30px 38px #fefefe;
    padding: 2rem;
    .inner {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: #dddddd;
      box-shadow: inset 29px 29px 58px #c7c7c7, inset -29px -29px 58px #f3f3f3;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    .neu {
      width: 8rem;
      height: 8rem;
      margin: 1rem;
    }
    .title {
      font-size: 1.1rem;
    }
  }
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  width: 100%;
  position: relative;

  .title {
    opacity: 1;
    color: #777;
    position: relative;
    width: 100%;
    z-index: 3;
    display: flex;
    font-size: 1.8rem;
    h2 {
      width: 100%;
      display: none;
    }
    div {
      line-height: 1.6;
    }
  }
  @media only screen and (max-width: 1100px) {
    margin: 3rem auto;
    .neu {
      width: 10rem;
      height: 10rem;
    }
    .title {
      font-size: 1.1rem;
    }
  }
`;
export default About;
