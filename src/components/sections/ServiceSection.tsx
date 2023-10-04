import React, { useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ServiceSectionProps {
  servicesRef: React.RefObject<HTMLDivElement>;
  }
  
  const flipIn = keyframes`
  from {
    transform: rotateX(180deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    
  }
`;

const AnimatedText = styled.span`
  transform: rotateX(180deg);
  animation: ${flipIn} 1.3s ease-in-out forwards;
  opacity: 1;
`;

const ServiceSection: React.FC<ServiceSectionProps> = ({ servicesRef }) => {
  return (
    <StyledServicesSection ref={servicesRef}>
      <ServicesHeading>
        <AnimatedText>AI Healthcare</AnimatedText>
        <AnimatedText>Meets</AnimatedText>
        <AnimatedText>Technology</AnimatedText>
      </ServicesHeading>
      <p>서비스 소개</p>
    </StyledServicesSection>
  );
};

const StyledServicesSection = styled.div`
  /* background-color: #000000; */
  height: 116rem;
`;

const ServicesHeading = styled.h2`
  font-size: 12rem;
  font-weight: 600;
  color: #fff;
  z-index: 0;
  position: absolute;
  top: 32%;
  left: 20%;
  transform: translateY(-50%);
  perspective: 120rem;
  display: flex;
  flex-direction: column;

  transform: rotateX(80deg);
  animation: ${flipIn} 1.1s ease-in-out forwards;
  opacity: 1;
`;

export default ServiceSection;