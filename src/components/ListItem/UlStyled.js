import styled from "styled-components";

const UlStyled = styled.li`
    .needToCheck {
        color: ${(props) => (props.theme === "light" ? props.theme.colors.fifth : props.theme.colors.fifth)};
    }
    .check {
    text-decoration: line-through;
    color: ${(props) => (props.theme === "light" ? props.theme.colors.sixth : props.theme.colors.sixth)};
    }
    .delParent{
        visibility: hidden;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .textItem{
        width: 80%;
        margin-right: 2.0rem;
        overflow: hidden;
        @media screen and (max-width: 41.4rem) {
            width: 70%;
        }
    }
    &:hover .delParent {
    cursor: pointer;
    visibility: visible;
    }
    @media screen and (max-width: 41.4rem) {
        .delParent {
            visibility: visible;
            img{
                width: 1.2rem;
            }
        }
    }
`;
export default UlStyled;