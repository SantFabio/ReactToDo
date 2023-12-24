import styled from "styled-components"

const ContainerWrapper = styled.div`
    position: relative;
    width: 54.0rem;
    height: auto;
    margin: auto;
    @media screen and (max-width: 41.4rem) {
        width: 86%;
    }
`;

export const Container = ({ children }) =>{
    return(
        <ContainerWrapper className="container">
            {children}
        </ContainerWrapper>
    )
}