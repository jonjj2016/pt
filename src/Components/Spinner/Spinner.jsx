import React from 'react';
import { Wrapper } from './Styled';

const Spinner = () => {
  return (
    <Wrapper>
      <div className='sk-folding-cube'>
        <div className='sk-cube1 sk-cube'></div>
        <div className='sk-cube2 sk-cube'></div>
        <div className='sk-cube4 sk-cube'></div>
        <div className='sk-cube3 sk-cube'></div>
      </div>
    </Wrapper>
  );
};

export default Spinner;
