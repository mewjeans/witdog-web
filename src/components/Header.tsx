import React, { useRef } from 'react';
import { Paths } from '../constants/path';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import witdogLogoWhite from '../../public/assets/witdog-logo-white.png';
import witdogLogo from '../../public/assets/witdog-logo.png';
import { Fonts } from '@/styles';

const Header: React.FC = () => {


  return (
    <HeaderLayout>
        <HeaderContainer>
          <div>
            <Link href='/home'>
              <Image src={witdogLogoWhite} alt='witdog-logo-white' />
            </Link>
          </div>

          <div>
          <Link href='/intro'>
              서비스 소개
            </Link>
            <Link href='/company'>
              회사 소개
            </Link>
            <Link href='/demo'>
              데모 영상
            </Link>
            <Link href='/download'>
              앱 다운로드
            </Link>
          </div>
        </HeaderContainer>
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
  /* width: 100% */
left: 0;
right: 0;
`

const HeaderContainer = styled.header`
background-color: #000000;
color: white;
gap: 36rem;
display: flex;


> div:first-child {
  width: 24rem;
  position: relative;
   > a {
      
    > img {
    margin: 4rem;
    width: 16rem;
    height: auto;
    position: absolute;
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
      ${Fonts.bold18};
    }
}
`