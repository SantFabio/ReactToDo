import { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import Sortable from "sortablejs";
import Filter from "./Filter";

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
            <ul ref={sortableListRef}>
                <Filter setFilter={props.setFilter} items={props.items} clearList={props.clearList} />
                {filteredItems.map((item) => (
                    <ListItem
                        key={item.id}
                        onDone={() => props.onDone(item)}
                        deleteItem={() => props.deleteItem(item)}
                        item={item}
                    />
                ))}
            </ul>
        </>
    )
}
