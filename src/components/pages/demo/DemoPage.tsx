import styled from "styled-components";

export const DemoPage = () => {
    return (
        <DemoLayout>
            <DemoContainer>
            <div>DemoPage</div>
            </DemoContainer>
        </DemoLayout>
   
    );
  };

const DemoLayout = styled.div`
    width: 100%;
    height: 105rem;
    display: flex;
    /* background-color: #000000; */
    justify-content: center;
    top: 11rem;
    position: fixed;
`

const DemoContainer = styled.div`
    width: 120rem;
    height: 105rem;
    background-color: #3f3f3f;

    > div {
        color: #FFFFFF;
    }
`