import styled from "styled-components"

const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.4rem;
    width: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    border-bottom: 2px solid ${(props) => (props.theme === 'light' ? props.theme.colors.third : props.theme.colors.third)};
    &.popup{
        box-shadow: 0px 35px 50px -15px ${(props) => (props.theme === 'light' ? props.theme.colors.fourth : props.theme.colors.fourth)};
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        border: 2px solid ${(props) => (props.theme === 'light' ? props.theme.colors.fifth : props.theme.colors.fifth)};
        color: ${(props) => (props.theme === "light" ? props.theme.colors.fifth : props.theme.colors.fifth)};        
    }
    .undone{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
    }

    button{
    margin-right: 2.0rem;
    }
    @media screen and (max-width: 41.4rem) {
        height: 4.8rem;
        padding-left: 2.0rem;
        padding-right: 2.0rem;
    }
`;
export default function Card(props) {
    return (
        <>
            <CardStyled className={props.className ? `${props.className}` : ''}>
                {props.children}
            </CardStyled>
        </>
    )
}