import React, { useRef } from 'react';
import styled from 'styled-components';

interface DemoSectionProps {
    demoRef: React.MutableRefObject<null>; // 이 부분을 수정해야 함
  }
  
  const DemoSection: React.FC<DemoSectionProps> = ({ demoRef }) => {
    return (
      <StyledDemoSection ref={demoRef}>
        <p>안녕</p>
      </StyledDemoSection>
    );
  };

const StyledDemoSection = styled.div`
  background-color: #141820;
  height: 116rem;
  /* 추가적인 스타일을 여기에 적용할 수 있습니다. */
`;

export default DemoSection;
