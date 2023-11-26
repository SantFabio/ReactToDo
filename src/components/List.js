import ListItem from "./ListItem";

export default function List(props) {
    return (
        <>
            <ul>
                {props.items.map((item) => <ListItem onDone={props.onDone} deleteItem={props.deleteItem} item={item} /> )}
            </ul>
        </>
    )
}