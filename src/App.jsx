import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Title from './Components/Title/Title';
import Header from './Views/Header';
import styled from 'styled-components';
import About from './About/About';
import ProjectCard from './Components/ProjectCard/ProjectCard';
// import Card from './Components/Crad/Crad';
import Features from './Components/Features/Features';
import Btn from './Components/Button/Btn';

function App() {
  const [state, setState] = useState({
    top: 0,
  });
  useEffect(() => {
    let i = window.addEventListener('scroll', (e) => {
      setState({ ...state, top: window.scrollY });
    });
    //  return () => removeEventListener(i);
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Wrapper position={state.top}>
      <div className='container'>
        <Header />

        <ProjectCard />
        <About />
        <Features />
        <Title />
      </div>
      <div className='sticky'>
        <Btn onClick={scrollToTop} clName={'far fa-arrow-alt-circle-up'} />
      </div>
      {/* <a href='skype:live:darkdevmountin?call'>Link will initiate Skype to call my Skype username!</a> */}
    </Wrapper>
  );
}
//live:.cid.b0d3cce514682d1b
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #ddd;
  overflow-x: hidden;
  .container {
    width: 60%;
    margin: 0 auto;
  }
  .sticky {
    position: fixed;
    z-index: 1000;
    bottom: 10%;
    right: 10%;
    height: 4rem;
    transition: 300ms;
    transform: scale(${({ position }) => (position >= 900 ? 1 : 0)});
  }
  @media only screen and (max-width: 1600px) {
    .container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1200px) {
    .container {
      width: 96%;
    }
  }
`;

export default App;
