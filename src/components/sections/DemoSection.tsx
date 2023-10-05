import React, { useRef } from 'react';
import styled from 'styled-components';
import { Fonts } from '@/styles';
import Image from 'next/image';
import demoimage from '../../../public/assets/witdog-demo-login.png';

interface DemoSectionProps {
  demoRef: React.MutableRefObject<null>;
}

const DemoIntroSection: React.FC<DemoSectionProps> = ({ demoRef }) => {
  return (
    <DemoIntro ref={demoRef}>
      <DemoContainer>
        <p>Demo</p>
        <Image src={demoimage} alt='Demo Image' width={400} height={600} />
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

export default DemoIntroSection;
