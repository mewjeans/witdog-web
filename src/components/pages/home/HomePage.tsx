import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Header from '@/components/Header';

export const HomePage = () => {
  const servicesRef = useRef(null);
  const companyRef = useRef(null);
  const demoRef = useRef(null);
  const downloadRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      // ref가 유효하고 해당 요소가 존재하는 경우 스크롤 실행
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
     <ServicesSection ref={servicesRef}>
  <p>안녕</p>
</ServicesSection>

<CompanySection ref={companyRef}>
  <p>회사 소개</p>
</CompanySection>

<DemoSection ref={demoRef}>
  <p>데모 영상</p>
</DemoSection>

<DownloadSection ref={downloadRef}>
  <p>앱 다운로드</p>
</DownloadSection>
    </div>
  );
};


const Section = styled.div`
  /* padding: 20px; */
  /* 각 섹션에 대한 고유한 스타일을 여기에 추가하세요 */
`;

const ServicesSection = styled(Section)`
  background-color: #141820;
  height: 116rem;
`;

const CompanySection = styled(Section)`
  background-color: #6d6e6e;
  height: 116rem;
`;

const DemoSection = styled(Section)`
  background-color: #425e4d;
  height: 116rem;
`;

const DownloadSection = styled(Section)`
  background-color: #806f6f;
  height: 116rem;
`;