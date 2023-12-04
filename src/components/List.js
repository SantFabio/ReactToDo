import { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import Sortable from "sortablejs";
import Filter from "./Filter";

export default function List(props) {
    const sortableListRef = useRef(null)

    useEffect(() => {
        if (sortableListRef.current) {
            new Sortable(sortableListRef.current, {
                animation: 150,
            });
        }
    }, [])
    return (
        <>
            <ul ref={sortableListRef}>
                {props.items.map((item) => <ListItem onDone={props.onDone} deleteItem={props.deleteItem} item={item} />)}
                <Filter items={props.items}></Filter>
            </ul>
        </>
    )
}