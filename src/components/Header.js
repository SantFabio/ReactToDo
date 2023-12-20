import styled from "styled-components"

const HeaderStyled = styled.header`
    div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`;

export const Header = ({ children }) =>{
    return(
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}