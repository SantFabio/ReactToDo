import styled from "styled-components";
import Check from "./assets/images/icon-check.svg";
import Cross from "./assets/images/icon-cross.svg"
import Card from "./Card";
import ButtonDone from "../styles/ButtonDone"


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
export default function ListItem(props) {
    // Função para deletar um item da lista de tarefas
    function onDeleteItem(item) {
        props.deleteItem(item);
    }
    function itemOnDone(e) {
        e.preventDefault();
        props.onDone(props.item)
    }
    return (
        <>
            <UlStyled key={props.item.id}>
                <Card className={props.item.done ? "check" : "needToCheck"}>
                    <ButtonDone onClick={itemOnDone} className="btn-done">
                        {props.item.done ? <img src={Check} alt="check"></img> : <div className="undone"></div>}
                    </ButtonDone>
                    <div className="textItem">
                        {props.item.text}
                    </div>
                    <div className="delParent" onClick={() => onDeleteItem(props.item)} >
                        <img className="del" src={Cross} alt="delete" />
                    </div>
                </Card>
            </UlStyled>
        </>
    )
}