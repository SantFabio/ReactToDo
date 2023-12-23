import styled from "styled-components";
// import horizon from "./assets/images/horizon.png";
// import corridor from "./assets/images/corridor.png";

const ImageStyled = styled.div`
    margin: 0;
    padding: 0;
    height: 30.0rem;
    width: 100vw;
    background: ${(props) => props.theme.background};
    opacity: 0.7;
    @media screen and (max-width: 41.4rem) {
        height: 20.0rem;
    }
`;

export default function Image(props) {
    return (
        <>
            <ImageStyled></ImageStyled>
        </>
    );
}

