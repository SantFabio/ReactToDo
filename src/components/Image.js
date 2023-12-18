import styled from "styled-components";
// import horizon from "./assets/images/horizon.png";
// import corridor from "./assets/images/corridor.png";

const ImageStyled = styled.div`
    margin: 0;
    padding: 0;
    height: 29.0rem;
    width: 100vw;
    background: ${(props) => props.theme.background};
    opacity: 0.7;
`;

export default function Image(props) {
    return (
        <>
            <ImageStyled></ImageStyled>
        </>
    );
}

// url(${(props) => (props.theme === 'light' ? props.theme.corridor : props.theme.horizon)}) 47% 47%/cover no-repeat
// .image {
//     margin: 0;
//     padding: 0;
//     height: 29.0rem;
//     width: 100vw;
//     background:linear-gradient(5deg, rgba(192,88,243,0.8) 23%, rgba(105,107,248,0.8) 67%, rgba(58,123,253,0.8) 93%),
//     url("./components/assets/images/horizon.png") 47% 47%/cover no-repeat;
// }
