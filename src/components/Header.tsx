import React, { useRef } from 'react';
import { Link } from 'react-scroll'; 
import styled from 'styled-components';
import Image from 'next/image';
import witdogLogo from '../../public/assets/witdog-logo.png';
import { Fonts } from '@/styles';
import { HomePage } from './pages/home';

const Header: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      // ref가 유효하고 해당 요소가 존재하는 경우 스크롤 실행
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderLayout>
        <HeaderContainer>
          <div>
            <Image src={witdogLogo} alt='witdog-logo' />
          </div>
          <div>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={-70} // 페이지 상단에서 얼마나 떨어져 있는지 조절할 수 있습니다.
              duration={500}
              onClick={() => scrollToSection(servicesRef)}
              name="services"
            >
              서비스 소개
            </Link>
            <Link
              to='company'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => scrollToSection(companyRef)}
              name="company"
            >
              회사 소개
            </Link>
            <Link
              to='demo'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => scrollToSection(demoRef)}
              name="demo"
            >
              데모 영상
            </Link>
            <Link
              to='download'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => scrollToSection(downloadRef)}
              name="download"
            >
              앱 다운로드
            </Link>
          </div>
        </HeaderContainer>
    </HeaderLayout>
  );
};

export default Header;


const HeaderLayout = styled.header`
background-color: #202020;
color: white;
height: 10rem;
display: flex;
flex-direction: row;
`

const HeaderContainer = styled.header`
background-color: #202020;
color: white;
gap: 35rem;
display: flex;

> div:first-child
    > img {
    margin: 3rem;
}

> div:last-child {
  display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10rem;
    justify-content: flex-end;

    > a {
      ${Fonts.bold18};
    }
}
`