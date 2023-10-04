import React, { useRef } from 'react';
import styled from 'styled-components';

interface DemoSectionProps {
    demoRef: React.MutableRefObject<null>;
  }
  
  const DemoIntroSection: React.FC<DemoSectionProps> = ({ demoRef }) => {
    return (
      <DemoIntro ref={demoRef}>
        <p>데모 페이지 입니다</p>
      </DemoIntro>
    );
  };

const DemoIntro = styled.div`
  background-color: #8d8d8d;
  height: 116rem;

  > p {
    width: 50rem;
    top: 34rem;
    left: 25rem;
    font-weight: 100;
    font-size: 2rem;
    line-height: 1.4;
    position: relative;
  }
`;


export default DemoIntroSection;
