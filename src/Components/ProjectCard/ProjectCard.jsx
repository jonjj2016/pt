import React from 'react';
import styled from 'styled-components';
import StyleHoc from '../../HOC/animate.hox';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Card from './Card';

const ProjectCard = () => {
  return (
    <Main>
      <Card webUrl='https://colorcode2020.netlify.app/' url='http://localhost:2000/stream/color_code' main />
      <div className='bottom'>
        <Card webUrl='https://imagegallery2019.netlify.app/' url='http://localhost:2000/stream/image_gallery' />
        <Card webUrl='https://mytypo.netlify.app/' url='http://localhost:2000/stream/typo' />
        <Card webUrl='https://neuromorphic.netlify.app/' url='http://localhost:2000/stream/neumorph' />
        {/* //neumorph */}
      </div>
    </Main>
  );
};
//image_gallery.mp4
const Main = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  .bottom {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 2rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 750px) {
    .bottom {
      display: flex;
      flex-direction: column;
    }
    margin-bottom: 5rem;
  }
`;

export default ProjectCard;
