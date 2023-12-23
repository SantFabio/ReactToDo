import styled from "styled-components"

const ContainerWrapper = styled.div`
    position: relative;
    max-width: 54.0rem;
    height: auto;
    margin: auto;
    top: -270px;
    @media screen and (max-width: 41.4rem) {
        max-width: 86%;
    }
`;

export const Container = ({ children }) =>{
    return(
        <ContainerWrapper className="container">
            {children}
        </ContainerWrapper>
    )
}