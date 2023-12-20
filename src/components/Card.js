import styled from "styled-components"

const CardStyled = styled.div`
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
    &:hover .delParent {
    visibility: visible;
    }
`;
export default function Card(props) {
    return (
        <>
            <CardStyled className={props.className ? `${props.className} card` : "card"}>
                {props.children}
            </CardStyled>
        </>
    )
}