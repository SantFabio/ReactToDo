import styled from "styled-components";

const TaskFilterStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem 0 2.4rem;
    font-size: 1.4rem;
    height: 5.0rem;
    color: #9495A5;
    div:last-child:hover {
        cursor: pointer;
        color: #494C6B;
    }
    .taskFilterStats-child2{
        display: flex;
        justify-content: space-between;
        width: 15.6rem;
        font-weight: 700;
        border-bottom: none;
        gap: 2.0rem;
            @media screen and (max-width: 41.4rem) {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2.0rem;
                background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
                top: 6.5rem;
                right: 0.0rem;
                max-width: calc(100% - 4.1rem);
                width: 100%;
                border-bottom: none;
                border-radius: 0.5rem;
                box-shadow: 0px 35px 50px -15px ${(props) => (props.theme === 'light' ? props.theme.colors.fourth : props.theme.colors.fourth)};            
            }
    }
    .taskFilterStats-child2 > div:hover{
        color: #494C6B;
        cursor: pointer;
    }
    .filterInFocus{
        color: #3A7CFD;
    }
`;
export default TaskFilterStyled;