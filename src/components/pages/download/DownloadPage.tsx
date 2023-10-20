import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Fonts } from '@/styles';
import { DownloadImg } from '../../../../public/svgs';

export const DownloadPage = () => {
  return (
    <DownloadLayout>
     <DownloadContainer>
        <div>
          <p>앱 다운로드</p>
          <p>
            반려견 언어를 이해하고,
            <br />
            정확히 소통하는 실시간 채팅 서비스 윗독
            <br /> 지금 바로 윗독하세요!
          </p>
          <a href='https://play.google.com/store/apps' target='_blank' rel='noopener noreferrer'>
            <button>
              <p>다운로드 버튼</p>
            </button>
          </a>
        </div>

        <Image src={DownloadImg} alt='downloadImage' width={600} />
      </DownloadContainer>
    </DownloadLayout>
  );
};

const DownloadLayout = styled.div`
  width: 100%;
  height: 105rem;
  display: flex;
  background-color: #000000;
  justify-content: center;
  top: 11rem;
  position: fixed;
`;

const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* width: 120rem; */
  margin-top: 20rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6rem;

    > p {
      color: #ffffff;
      ${Fonts.bold20};
    }

    > p:nth-child(2) {
      color: #ffffff;
      ${Fonts.bold34};
      line-height: 5rem;
    }

    > a {
      button {
        background-color: #a4daac;
        border-radius: 3rem;
        width: 16rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        > p {
          display: flex;
        }
      }
    }
  }

  > img {
    display: flex;
  }
`;