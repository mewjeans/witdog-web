import React, { useRef } from 'react';
import styled from 'styled-components';
import earth from '../../../../public/assets/earth.mp4';
import { Fonts } from '@/styles';
import Image from 'next/image';
import demo from '../../../../public/assets/demo-video.mp4';
import SeyonLogo from '../../../../public/assets/seyon-logo-transparent.png';


// const DemoLayout = styled.div`
//     width: 100%;
//     height: 105rem;
//     display: flex;
//     /* background-color: #000000; */
//     justify-content: center;
//     top: 11rem;
//     position: fixed;
// `

// const DemoContainer = styled.div`
//     width: 120rem;
//     height: 105rem;
//     background-color: #3f3f3f;

//     > div {
//         color: #FFFFFF;
//     }
// `


export const DemoPage: React.FC = () => {
  return (
    <DemoLayout>
      <DemoContainer>
        <div>DemoPage</div>

        <IntroTitle>
          <div>
            <p>Demo Video</p>
          </div>

          {/* <div>
            <Image src={SeyonLogo} alt='seyon-logo' />
            <p>세계를 연결하는 세연</p>
          </div> */}
        </IntroTitle>

        <VideoContainer>
            <div> 
          <video autoPlay controls>
            <source src='/assets/demo-video.mp4' type='video/mp4' />
          </video>
          </div>
        </VideoContainer>

      </DemoContainer>
    </DemoLayout>
  );
};

const DemoLayout = styled.div`
  width: 100%;
  height: 105rem;
  display: flex;
  background-color: #000000;
  justify-content: center;
  top: 11rem;
  position: fixed;
`;

const DemoContainer = styled.div`
  width: 120rem;
  height: 105rem;
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const IntroTitle = styled.div`
  > div:nth-child(1) {
    margin: 5rem 0rem;
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
  justify-content: center;
  /* overflow: hidden; */

  > div {
    /* display: flex;
    width: 26rem;
    overflow: hidden;
    justify-content: center; */
    display: flex;
    width: 26rem;
    height: 56rem;
    overflow: hidden;
    justify-content: center;
    align-items: flex-start;
    border-radius: 3rem;

    > video {
    /* width: 100rem;
    height: 60rem;
    display: flex; */
    width: 100rem;
    /* height: 64rem; */
    display: flex;
    border-radius: 1rem;
  }
    
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
