import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.07];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const Crad = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props.xys.interpolate(trans) }}>
      <div className='card'></div>
    </animated.div>
  );
};

export default Crad;
