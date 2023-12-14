import Check from "./assets/images/icon-check.svg";
import Cross from "./assets/images/icon-cross.svg"
import Card from "./Card";


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
            <li key={props.item.id}>
                <Card className={props.item.done ? "check" : "needToCheck"}>
                    <button onClick={itemOnDone} className="btn-done">
                        {props.item.done ? <img src={Check} alt="check"></img> : <div className="undone"></div>}
                    </button>
                    <div className="textItem">
                        {props.item.text}
                    </div>
                    <div onClick={() => onDeleteItem(props.item)} >
                        <img className="del" src={Cross} alt="delete" />
                    </div>
                </Card>
            </li>
        </>
    )
}