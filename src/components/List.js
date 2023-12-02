import { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import Sortable from "sortablejs";

export default function List(props) {
    const sortableListRef = useRef(null)
    
    useEffect(() =>{
        if (sortableListRef.current) {
            new Sortable(sortableListRef.current,{
                animation: 150,
            });
        }
    },[])
    return (
        <>
            <ul ref={sortableListRef}>
                {props.items.map((item) => <ListItem onDone={props.onDone} deleteItem={props.deleteItem} item={item} /> )}
            </ul>
        </>
    )
}