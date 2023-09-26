import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const appearAndDisappear = keyframes`
  0% {
    top: -150px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: calc(50vh + 150px);
    opacity: 0;
  }
`;

const GraphicWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const GreenCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 1;
  filter: blur(0px);
  border-radius: 50%;
  left: calc(50% - 150px);
  background: radial-gradient(circle 420px at 65% 40%, #10782e, #5eff8b, #9affb7);
  animation: ${appearAndDisappear} 5s linear infinite;
`;

const Circle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Calculate the top position of the GreenCircle based on scroll position
  const initialPosition = -150; // Initial top position of the GreenCircle
  const maxPosition = typeof window !== 'undefined' ? window.innerHeight - 150 : 0; // Maximum top position to stay within the viewport
  const topPosition = Math.min(initialPosition + scrollPosition, maxPosition);

  return (
    <GraphicWrapper>
      <GreenCircle style={{ top: `${topPosition}px` }} />
    </GraphicWrapper>
  );
};

export default Circle;
