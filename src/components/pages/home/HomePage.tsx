import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Header from '@/components/Header';
import Gnb from '../../Gnb';
import ServiceSection from '../../sections/ServiceSection';
import CompanyIntroSection from '../../sections/CompanySection';
// import DownloadSection from '../../sections/DownloadSection';
// import DemoSection from '../../sections/DemoSection';

export const HomePage = () => {
  const servicesRef = useRef(null);
  const companyRef = useRef(null);
  const demoRef = useRef(null);
  const downloadRef = useRef(null);

  return (
    
    <div>
      <Gnb
        servicesRef={servicesRef}
        companyRef={companyRef}
        demoRef={demoRef}
        downloadRef={downloadRef}
      />

      <ServiceSection servicesRef={servicesRef} />
      <CompanyIntroSection companyRef={companyRef} />
      {/* // <DemoSection demoRef={demoRef} />
      // <DownloadSection downloadRef={downloadRef} /> */} 

    </div>
  );
};


const Section = styled.div`
  /* padding: 20px; */
 
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