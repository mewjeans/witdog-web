import React, { useRef } from 'react';
import { Paths } from '../constants/path';
import Link from 'next/link';
import styled from 'styled-components';

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
          <li>
          <button onClick={() => scrollToSection(servicesRef)} style={{ color: 'rgb(255, 255, 255)' }}>
            service
          </button>
          </li>

          <li>
          <button onClick={() => scrollToSection(companyRef)} style={{ color: 'rgb(241, 238, 238)' }}>
            about us
          </button>
          </li>

          <li>
          <button onClick={() => scrollToSection(demoRef)} style={{ color: 'rgb(236, 232, 232)' }}>
            demo
          </button>
          </li>

          <li>
          <button onClick={() => scrollToSection(downloadRef)} style={{ color: 'rgb(255, 255, 255)' }}>
            download
          </button>
          </li>

          </ul>
        </GnbLayout>
      );
    };

export default Gnb;

const GnbLayout = styled.nav`
  bottom: 4rem;
  left: 4rem;
  /* background-color: #706f6f; */
    height: 16rem;
    display: flex;
    position: fixed;
    flex-direction: column;

  > ul {
    list-style: none;
    display: flex;
    padding: 0;
    gap: 2rem;
    flex-direction: column;

    > li {
      margin-right: 20px;
      cursor: pointer;
    }
  }
`;