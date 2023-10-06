import React, { useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Fonts } from '@/styles';
import Image from 'next/image';
import demoimage from '../../../public/assets/witdog-demo-login.png';

interface DemoSectionProps {
  demoRef: React.MutableRefObject<null>;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(20deg) rotateX(-20deg);
  }
`;

const DemoIntroSection: React.FC<DemoSectionProps> = ({ demoRef }) => {
  return (
    <DemoIntro ref={demoRef}>
      <DemoContainer>
        <p>Demo</p>
        <RotatingImage src={demoimage} alt='Demo Image' width={400} height={600} />
      </DemoContainer>
    </DemoIntro>
  );
};

const DemoIntro = styled.div`
  background: linear-gradient(to bottom, white, #b3e4a9, #134917, black);
  height: 116rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DemoContainer = styled.div`
  margin-top: 20rem;
  width: 120rem;
  display: flex;
  /* gap: 1rem; */
  justify-content: flex-start;

  > p {
    width: 40rem;
    top: 34rem;
    left: 25rem;
    ${Fonts.bold50};
  }
`;

const RotatingImage = styled(Image)`
animation: ${rotateAnimation} 6s linear;
transform-origin: 50% 50%;
`;


export default DemoIntroSection;
