import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface GreenCircleProps {
  '--scrollPosition'?: string;
}

const moveAnimation = keyframes`
  0% {
    opacity: 1;
    top: -300px;
  }
  100% {
    opacity: 0;
    top: 55vh;
  }
`;

const GraphicWrapper = styled.div`
  /* display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative; */
  position: fixed;
  top: -300px;
  left: inherit;
  right: calc(95px + 10vw);

  width: 150px;
  height: 150px;
  filter: blur(0px);
  /* background: radial-gradient(circle 210px at 65% 40%, #10782e, #5eff8b, #9affb7); */
  animation: ${moveAnimation} 10s linear infinite;
`;

const GreenCircle = styled.div`
  /* /* position: absolute;
  width: 30rem;
  height: 30rem;
  z-index: 0;
  filter: blur(0px);
  border-radius: 50%;
  left: calc(50% - 150px);
  background: radial-gradient(circle 420px at 65% 40%, #10782e, #5eff8b, #9affb7);
 
  animation-play-state: paused;
  animation-delay: calc(var(--scrollPosition) * -0.1s);
  animation-fill-mode: both;/*  */
  position: relative;
  width: 20rem;
  height: 20rem;
  z-index: 0;
  top: -30rem;
  filter: blur(0px);
  border-radius: 50%;
  left: calc(50% + 350px - 150px);
  background: radial-gradient(circle 420px at 65% 40%, #10782e, #5eff8b, #9affb7);
  animation: ${moveAnimation} 10s linear infinite;
`;

const Circle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition); // Adjust for initial position
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <GreenCircle style={{ animationDelay: `${scrollPosition * -0.01}s` }} />
    </>
  );
};

export default Circle;
