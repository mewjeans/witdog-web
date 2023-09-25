import React, { useRef } from 'react';
import styled from 'styled-components';

interface CompanySectionProps {
    companyRef: React.MutableRefObject<null>;
  }
  
  const CompanyIntroSection: React.FC<CompanySectionProps> = ({ companyRef : companyRefProp }) => {
    return (
      <StyledCompanySection ref={ companyRefProp }>
        <p>안녕</p>
      </StyledCompanySection>
    );
  };

const StyledCompanySection = styled.div`
  background-color: #525252;
  height: 116rem;
`;

export default CompanyIntroSection;
