import styled from "styled-components"

const MainStyled = styled.main`
    background-color: ${(props)=> (props.theme === 'light' ? props.theme.colors.primary : props.theme.colors.primary)};
    box-shadow: 0px 35px 50px -15px ${(props)=> (props.theme === 'light' ? props.theme.colors.fourth : props.theme.colors.fourth)};
    border-radius: 5px;
`;
export default MainStyled;