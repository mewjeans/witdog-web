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
  background-color: #141820;
  height: 116rem;

`;

export default DemoIntroSection;
