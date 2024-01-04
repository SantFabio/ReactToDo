import styled from 'styled-components';

const H1andToggle = styled.div`
    margin-bottom: 3.0rem;
    margin-top: 3.0rem;
    @media screen and (max-width: 41.4rem) {
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    }
    h1 {
        color: #FFF;
        font-size: 4.0rem;
        font-weight: 700;
        letter-spacing: 1.5rem;
        position: relative;
        top: 0.5rem;
        @media screen and (max-width: 41.4rem) {
            font-size: 2.5rem;
        }
    }
    .modo {
        border: none;
        background-color: transparent;
        height: 2.6rem;
        @media screen and (max-width: 41.4rem) {
            height: 2.0rem;
            img{
                height: 2.0rem;
            }
    }
}
`;
export default H1andToggle;