import styled from "styled-components";

const ButtonDone = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    background: linear-gradient(138deg, rgba(87, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 100%);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 41.4rem) {
        width: 2.0rem;
        height: 2.0rem;
    }
        .undone {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        position: relative;
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        @media screen and (max-width: 41.4rem) {
            width: 1.8rem;
            height: 1.8rem;
        }
        }
        
        
    
`;
export default ButtonDone;