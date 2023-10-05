import React, { useRef } from 'react';
import { Paths } from '../constants/path';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import witdogLogoWhite from '../../public/assets/witdog-logo-white.png';
import witdogLogo from '../../public/assets/witdog-logo.png';
import { Fonts } from '@/styles';

const Footer: React.FC = () => {
  return (
    <FooterLayout>
      <FooterContainer>
        <div>
          <Image src={witdogLogoWhite} alt='witdog-logo-white' />

          <div>
            <p>고객 이용약관</p>
            <p>개인정보처리방침</p>
          </div>
          <div>
            <p>(주)세연시스템즈 | 경기도 광명시 소하로 190, B동 1316호 </p>
            <p>사업자 등록 번호 : 440-81-02374 | 연락처 : 02-6274-2220</p>
            <p>대표 이사 : 최석문</p>
            <p>COPYRIGHTS ⓒ Seyon Systems Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </FooterContainer>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.header`
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  background-color: #5e5e5e;
  color: #a49d9d;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  > div {
    background: #5e5e5e;
    width: 160rem;
    height: 26rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    color: #a49d9d;
    padding: 4rem 10rem;

    > img {
      width: 15rem;
      height: 3rem;
      justify-content: flex-start;
    }

    > div:nth-child(2) {
      display: flex;
      gap: 2rem;

      > p {
        ${Fonts.medium16};
        line-height: 1.9rem;
      }
    }

    > div:nth-child(3) {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      > p {
        ${Fonts.medium14};
      }
    }
  }
`;
