import React, { useRef } from 'react';
import styled from 'styled-components';

interface ServiceSectionProps {
    servicesRef: React.MutableRefObject<null>; // 이 부분을 수정해야 함
  }
  
  const ServiceSection: React.FC<ServiceSectionProps> = ({ servicesRef }) => {
    return (
      <StyledServicesSection ref={servicesRef}>
        <p>안녕</p>
      </StyledServicesSection>
    );
  };

const StyledServicesSection = styled.div`
  background-color: #141820;
  height: 116rem;
  /* 추가적인 스타일을 여기에 적용할 수 있습니다. */
`;

export default ServiceSection;
