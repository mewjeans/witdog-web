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
          <p>회사 소개 우리회사는 어떻구여 저쩌구요 회사 소개 우리회사는 어떻구여 저쩌구요회사 소개 우리회사는 어떻구여 저쩌구요회사 소개 우리회사는 어떻구여 저쩌구요회사 소개 우리회사는 어떻구여 저쩌구요</p>
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
