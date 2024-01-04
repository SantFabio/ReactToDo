import { useEffect, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import Sortable from "sortablejs";
import Filter from "../Filter/Filter";
import UlStyled from "./UlStyled";

export default function List(props) {
    const sortableListRef = useRef(null);

    useEffect(() => {
        if (sortableListRef.current) {
            new Sortable(sortableListRef.current, {
                animation: 150,
            });
        }
    }, []);

    const filteredItems = props.items.filter((item) => {
        if (props.filter === 'completed') {
            return item.done;
        } else if (props.filter === 'active') {
            return !item.done;
        } else {
            return true;
        }
    });

    return (
        <>
            <UlStyled ref={sortableListRef}>
                {filteredItems.map((item) => (
                    <ListItem
                    key={item.id}
                    onDone={() => props.onDone(item)}
                    deleteItem={() => props.deleteItem(item)}
                    item={item}
                    />
                    ))}
                    <Filter filter={props.filter} setFilter={props.setFilter} items={props.items} clearList={props.clearList} />
            </UlStyled>
        </>
    )
}
