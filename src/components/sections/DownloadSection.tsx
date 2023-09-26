import React, { useRef } from 'react';
import styled from 'styled-components';

interface DownloadSectionProps {
    downloadRef: React.MutableRefObject<null>; // 이 부분을 수정해야 함
  }
  
  const DownloadIntroSection: React.FC<DownloadSectionProps> = ({ downloadRef }) => {
    return (
      <DownloadIntro ref={downloadRef}>
        <p>앱 다운로드</p>
      </DownloadIntro>
    );
  };

const DownloadIntro = styled.div`
  background-color: #141820;
  height: 116rem;

`;

export default DownloadIntroSection;
