import React, { useRef } from 'react';
import styled from 'styled-components';

interface DownloadSectionProps {
    downloadRef: React.MutableRefObject<null>; // 이 부분을 수정해야 함
  }
  
  const DownloadSection: React.FC<DownloadSectionProps> = ({ downloadRef }) => {
    return (
      <StyledDownloadSection ref={downloadRef}>
        <p>앱 다운로드</p>
      </StyledDownloadSection>
    );
  };

const StyledDownloadSection = styled.div`
  background-color: #141820;
  height: 116rem;
  /* 추가적인 스타일을 여기에 적용할 수 있습니다. */
`;

export default DownloadSection;
