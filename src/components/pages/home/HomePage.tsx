import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Header from '@/components/Header';
import Gnb from '../../Gnb';
import ServiceSection from '../../sections/ServiceSection';
import CompanyIntroSection from '../../sections/CompanySection';
import DownloadIntroSection from '../../sections/DownloadSection';
import DemoIntroSection from '../../sections/DemoSection';
import Circle from '@/components/Circle';
import Footer from '@/components/Footer';

export const HomePage = () => {
  const servicesRef = useRef(null);
  const companyRef = useRef(null);
  const demoRef = useRef(null);
  const downloadRef = useRef(null);
  const introRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState('#000');

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //  투명도 계산
  const opacity1 = Math.min(1 - scrollPosition / 1200, 1);


  return (
    <HomepageLayout>
    <HomepageContainer>
      <Gnb
        servicesRef={servicesRef}
        companyRef={companyRef}
        demoRef={demoRef}
        downloadRef={downloadRef}
      />
      <ServiceSection servicesRef={servicesRef} />
      <CompanyIntroSection companyRef={companyRef} />
      <Background style={{ opacity: opacity1 }} />
      <DemoIntroSection demoRef={demoRef} />
      {/* <Background style={{ background: bgColor2 }} /> */}
      <DownloadIntroSection downloadRef={downloadRef} />
      <Footer />
    </HomepageContainer>
    </HomepageLayout>
  );
};

const HomepageLayout = styled.div`
  width: 100%;
  display: flex;
`;

const HomepageContainer = styled.div`
 width: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000;
  z-index: -1;
  transition: opacity 0.3s ease; /* 투명도 전환 애니메이션 설정 */
`;