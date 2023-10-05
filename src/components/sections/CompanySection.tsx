import React, { useRef } from 'react';
import styled from 'styled-components';
import Circle from '../Circle';

interface CompanySectionProps {
    companyRef: React.MutableRefObject<null>;
  }
  
  const CompanyIntroSection: React.FC<CompanySectionProps> = ({ companyRef : companyRefProp }) => {
    return (
      <StyledCompanySection ref={ companyRefProp }>
         <HeaderText>Smart Pet Care<br />Solution</HeaderText>
          <p>회사 소개 세연시스템즈는 지속 가능한 비즈니스를 추구합니다.
            더욱 스마트한 서비스 모델을 연구 개발하여 고객의 상상을 실현하고 있습니다.
          </p>
        <Circle />
      </StyledCompanySection>
      
    );
  };

const StyledCompanySection = styled.div`
  /* background-color: #525252; */
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

const HeaderText = styled.h2`
  opacity: 1;
  top: 0rem;

  @media screen and (max-width: 1440px) {
    font-size: 6rem;
    padding-bottom: 3vw;
  }

  color: #222;
  position: relative;
  font-weight: 100;
  font-size: 9rem;
  line-height: 1.1;
  padding-bottom: 3rem;
  top: 34rem;
  left: 24rem;
`;

export default CompanyIntroSection;
