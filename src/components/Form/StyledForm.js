import styled from "styled-components";

// estilização que muda dependendo do tema 
const StyledForm = styled.form`
    display: flex;
    align-items: center;
    height: 6.4rem;
    width: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    border-radius: 5px;
    margin-bottom: 2.4rem;
    background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
    @media screen and (max-width: 41.4rem) {
        margin-bottom: 1.5rem;
    }

    input{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};;
        border: none;
        font-family: Josefin Sans;
        font-size: 1.8rem;
        width: 75%;
        margin-left: 2.3rem;
        @media screen and (max-width: 41.4rem) {
        font-size: 1.2rem;
    }
    }
    input::placeholder{
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
    input:focus {
        outline: none;
        border: none;
        caret-color: #3A7CFD;
    }
    @media screen and (max-width: 41.4rem) {
        height: 4.8rem;
        padding-left: 2.0rem;
        padding-right: 2.0rem;
    }
`;
export default StyledForm;
