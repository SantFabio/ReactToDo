import styled from "styled-components"

const CardStyled = styled.div`
    border-bottom: 2px solid ${(props) => (props.theme === 'light' ? props.theme.colors.third : props.theme.colors.third)};

    .undone{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
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