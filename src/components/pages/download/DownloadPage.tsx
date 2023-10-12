import styled from "styled-components";

  export const DownloadPage = () => {
      return (
          <DownloadLayout>
              <DownloadContainer>
              <div>DownloadPage</div>
              </DownloadContainer>
          </DownloadLayout>
     
      );
    };
  
  const DownloadLayout = styled.div`
      width: 100%;
      height: 105rem;
      display: flex;
      /* background-color: #000000; */
      justify-content: center;
      top: 11rem;
      position: fixed;
  `
  
  const DownloadContainer = styled.div`
      width: 120rem;
      height: 105rem;
      background-color: #3f3f3f;
  
      > div {
          color: #FFFFFF;
      }
  `