import styled from "styled-components";

const ImageStyled = styled.div`
    position: fixed;
    top: 0;
    margin: 0;
    padding: 0;
    height: 30.0rem;
    width: 100vw;
    background: ${(props) => props.theme.background};
    opacity: 0.7;
    @media screen and (max-width: 41.4rem) {
        height: 20.0rem;
        background-position: ${(props) => props.theme === 'light' ? props.theme.bgp.position : props.theme.bgp.position};
        background-size: ${(props) => props.theme === 'light' ? props.theme.bgp.size : props.theme.bgp.size};
        opacity: 0.9;
    }
`;

export default function Image(props) {
    return (
        <>
            <ImageStyled></ImageStyled>
        </>
    );
}

