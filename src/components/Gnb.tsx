import React, { useRef } from 'react';
import { Paths } from '../constants/path';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import witdogLogoWhite from '../../public/assets/witdog-logo-white.png';
import witdogLogo from '../../public/assets/witdog-logo.png';
import { Fonts } from '@/styles';
import Header from '@/components/Header';

interface GnbProps {
    servicesRef: React.RefObject<HTMLElement>; // Ref 타입으로 변경
    companyRef: React.RefObject<HTMLElement>; // Ref 타입으로 변경
    demoRef: React.RefObject<HTMLElement>; // Ref 타입으로 변경
    downloadRef: React.RefObject<HTMLElement>; // Ref 타입으로 변경
  }
  
  const Gnb: React.FC<GnbProps> = ({
    servicesRef,
    companyRef,
    demoRef,
    downloadRef,
  }) => {
    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
        <GnbLayout>
           <ul>
        <li onClick={() => scrollToSection(servicesRef)}>
          <a href="javascript:;" style={{ color: 'rgb(104, 104, 104)' }}>
            서비스 소개
          </a>
        </li>
        <li onClick={() => scrollToSection(companyRef)}>
          <a href="javascript:;" style={{ color: 'rgb(104, 104, 104)' }}>
            회사 소개
          </a>
        </li>
        <li onClick={() => scrollToSection(demoRef)}>
          <a href="javascript:;" style={{ color: 'rgb(104, 104, 104)' }}>
            데모
          </a>
        </li>
        <li onClick={() => scrollToSection(downloadRef)}>
          <a href="javascript:;" style={{ color: 'rgb(104, 104, 104)' }}>
            다운로드
          </a>
        </li>
          </ul>
        </GnbLayout>
      );
    };

export default Gnb;

const GnbLayout = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    li {
      margin-right: 20px;
      cursor: pointer;
    }
  }
`;