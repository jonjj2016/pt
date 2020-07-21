import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 200, 1.05];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Animate = ({ children }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 850, friction: 110 } }));
  return (
    <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props.xys.interpolate(trans) }}>
      {children}
    </animated.div>
  );
};

export default Animate;
