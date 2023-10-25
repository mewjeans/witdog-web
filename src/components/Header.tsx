import React, { useRef, useState, useEffect } from 'react';
import { Paths } from '../constants/path';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import witdogLogoWhite from '../../public/assets/witdog-logo-white.png';
import witdogLogo from '../../public/assets/witdog-logo.png';
import { Fonts } from '@/styles';


interface BurgerButtonProps {
  isMenuOpen: boolean;
}

const Header: React.FC = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    SetIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, []);


  return (
    <HeaderLayout>

      <HeaderContainer>
        <div>
          <Link href='/home'>
            <Image src={witdogLogoWhite} alt='witdog-logo-white' />
          </Link>
        </div>

        <div>
          <Link href='/intro'>서비스 소개</Link>
          <Link href='/company'>회사 소개</Link>
          <Link href='/demo'>데모 영상</Link>
          <Link href='/download'>앱 다운로드</Link>
        </div>
      </HeaderContainer>
      <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  background-color: #000000;
  color: white;
  height: 11rem;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  left: 0;
  right: 0;
`;

const HamburgerButton = styled.div<BurgerButtonProps>`
  display: none;
  cursor: pointer;

  > div {
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: transform 0.3s, opacity 0.3s;

    &:first-child {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
    }

    &:last-child {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none')};
    }
  }

  @media (max-width: 1200px) {
    display: block;

  }
`;

const HeaderContainer = styled.header`
    background-color: #000000;
    color: white;
    /* gap: 100rem; */
    justify-content: space-between;
    width: 92%;
    display: flex;

  > div:first-child {
    width: 24rem;
    position: relative;
    > a {
      > img {
//      margin: 4rem;
        width: 16rem;
        height: auto;
        position: absolute;
        display: flex;
        margin-left: 5rem;
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8rem;
    justify-content: flex-end;

    > a {
      ${Fonts.medium18};
    }
  }
`;
