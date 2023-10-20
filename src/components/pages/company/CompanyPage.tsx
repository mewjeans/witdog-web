import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import wave from '../../../../public/svgs/wave.svg';
import { Fonts } from '@/styles';
import Image from 'next/image';
import SeyonLogo from '../../../../public/assets/seyon-logo-transparent.png';

export const CompanyPage: React.FC = () => {
  return (
    <CompanyLayout>
      <CompanyContainer>
        <div>IntroPage</div>

        <CompanyIntroTitle>
          <div>
            <p>Best Partner For Connecting the World</p>
          </div>

          <div>
            <Image src={SeyonLogo} alt='seyon-logo' />
            <p>세계를 연결하는 세연</p>
          </div>
        </CompanyIntroTitle>

        <VideoContainer>
          <video autoPlay controls loop>
            <source src='/assets/earth-black.mp4' type='video/mp4' />
          </video>
          <Wave />
        </VideoContainer>

        <CompanyIntroContent>
          
          <div>
            <p>ICT 사업</p>
            <p>대한민국의 우수한 ICT 산업을 글로벌 시장에 판매하고 있습니다</p>
          </div>

          <div>
            <p>기술 혁신</p>
            <p>AI를 기반으로 하는 스마트 스포츠 기기를 독자 연구 개발하고 있습니다</p>
          </div>

          <div>
            <p>해외 사업</p>
            <p>AI를 기반으로 하는 스마트 스포츠 기기를 독자 연구 개발하고 있습니다</p>
          </div>
        </CompanyIntroContent>
      </CompanyContainer>
    </CompanyLayout>
  );
};

const CompanyLayout = styled.div`
  width: 100%;
  height: 105rem;
  display: flex;
  background-color: #000000;
  justify-content: center;
  top: 11rem;
  position: fixed;
`;

const CompanyContainer = styled.div`
  width: 120rem;
  height: 105rem;
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const CompanyIntroTitle = styled.div`
  > div:nth-child(1) {
    margin-top: 4rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    gap: 2rem;

    > p {
      ${Fonts.bold40}
    }
  }

  > div:nth-child(2) {
    margin: 3rem 0rem 0rem 0rem;
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
 position: relative;
  display: flex;
  width: 120rem;
  height: 50rem;
  justify-content: center;
  overflow: hidden;

  > video {
    width: 100rem;
    height: 45rem;
  }
`;

const CompanyIntroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  justify-content: center;

  > div {
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

const waveAnimation = keyframes`
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(110%);
  }
`

const Wave = styled.div`
  position: absolute;
  top: 50vh;
  width: calc(1600px * 4);
  height: 20vw;
  background: url(public/svgs/wave.svg) repeat-x;
  animation: ${waveAnimation} 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

// export const CompanyPage = () => {
//   return (
//     <CompanyLayout>
//       <CompanyContainer>
//         <div>CompanyPage</div>
//       </CompanyContainer>
//     </CompanyLayout>
//   );
// };

// const CompanyLayout = styled.div`
//   width: 100%;
//   height: 105rem;
//   display: flex;
//   /* background-color: #000000; */
//   justify-content: center;
//   top: 11rem;
//   position: fixed;
// `;

// const CompanyContainer = styled.div`
//   width: 120rem;
//   height: 105rem;
//   background-color: #3f3f3f;

//   > div {
//     color: #ffffff;
//   }
// `;
