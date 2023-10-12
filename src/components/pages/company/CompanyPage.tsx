import styled from "styled-components";

export const CompanyPage = () => {
    return (
        <CompanyLayout>
            <CompanyContainer>
            <div>CompanyPage</div>
            </CompanyContainer>
        </CompanyLayout>
   
    );
  };

const CompanyLayout = styled.div`
    width: 100%;
    height: 105rem;
    display: flex;
    /* background-color: #000000; */
    justify-content: center;
    top: 11rem;
    position: fixed;
`

const CompanyContainer = styled.div`
    width: 120rem;
    height: 105rem;
    background-color: #3f3f3f;

    > div {
        color: #FFFFFF;
    }
`