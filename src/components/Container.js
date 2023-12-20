import styled from "styled-components"

const ContainerWrapper = styled.div`
    position: relative;
    max-width: 54.0rem;
    height: auto;
    margin: auto;
    top: -250px;
`;

export const Container = ({ children }) =>{
    return(
        <ContainerWrapper className="container">
            {children}
        </ContainerWrapper>
    )
}