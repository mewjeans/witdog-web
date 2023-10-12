import React, { useRef } from 'react';
import styled from 'styled-components';
import earth from '../../../../public/assets/earth.mp4';
import { Fonts } from '@/styles';
import Image from 'next/image';
import SeyonLogo from '../../../../public/assets/seyon-logo-transparent.png'

export const IntroPage: React.FC = () => {
      return (
          <IntroLayout>
              <IntroContainer>
                <div>IntroPage</div>
                
                <IntroTitle>
                  <div>
                    <p>Best Partner For Connecting the World</p>
                  </div>

                  <div>
                  <Image src={SeyonLogo}  alt='seyon-logo' />
                  <p>세계를 연결하는 세연</p>
                  </div>
                </IntroTitle>


              
              <VideoContainer>

                <video autoPlay controls>
                  <source src="/assets/earth-black.mp4" type="video/mp4" />
                </video>

              </VideoContainer>

              
              <IntroContent>
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
                  
                </IntroContent>


              </IntroContainer>
          </IntroLayout>
     
      );
    };
  
  const IntroLayout = styled.div`
      width: 100%;
      height: 105rem;
      display: flex;
      /* background-color: #000000; */
      justify-content: center;
      top: 11rem;
      position: fixed;
  `
  
  const IntroContainer = styled.div`
    width: 120rem;
    height: 105rem;
    background-color: #000000;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `

  const IntroTitle = styled.div`
      
      > div:nth-child(1) {
      margin-top: 5rem;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      gap: 2rem;

        > p {
          ${Fonts.bold40}

        }
      }

      > div:nth-child(2) {
        margin: 5rem 0rem;
        color: #FFFFFF;
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
        width: 120rem;
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
