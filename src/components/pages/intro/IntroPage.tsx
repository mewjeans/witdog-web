import React, { useRef } from 'react';
import styled from 'styled-components';
import earth from '../../../../public/assets/earth.mp4';
import { Fonts } from '@/styles';
import IntroImage from '../../../../public/assets/intro.png';
import Image from 'next/image';
import demo from '../../../../public/assets/demo-video.mp4';
import SeyonLogo from '../../../../public/assets/seyon-logo-transparent.png';

export const IntroPage: React.FC = () => {
  return (
    <IntroLayout>
      <IntroContainer>
        <div>IntroPage</div>

        <IntroTitle>
          <div>
            <p>Our Solution</p>
          </div>


            <Image src={IntroImage} alt='intro-img' />
           

        </IntroTitle>

      </IntroContainer>
    </IntroLayout>
  );
};

const IntroLayout = styled.div`
  width: 100%;
  height: 435rem;
  display: flex;
  background-color: #000000;
  justify-content: center;
  top: 11rem;
  position: absolute;
`;

const IntroContainer = styled.div`
  width: 120rem;
  height: 100rem;
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* overflow-y: auto; */
`;

const IntroTitle = styled.div`
  > div:nth-child(1) {
    margin-top: 4rem;
    color: #ffffff;
    display: flex;
    justify-content:  flex-start;
    gap: 2rem;

    > p {
      ${Fonts.bold40}
    }
  }

  > div:nth-child(2) {
    margin: 5rem 0rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;

    > img {
      width: 5%;
      height: auto;
      display: flex;
      justify-content: center;
    }
  }
`;

const VideoContainer = styled.div`
  display: flex;
  width: 120rem;
  height: 60rem;
  justify-content: center;
  overflow: hidden;

  > video {
    width: 100rem;
    height: 60rem;
  }
`;

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  > div {
    width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > p:nth-child(1) {
      ${Fonts.medium24}
      color: white;
    }

    > p:nth-child(2) {
      ${Fonts.regular18}
      color: white;
      line-height: 1.4;
    }
  }
`;
