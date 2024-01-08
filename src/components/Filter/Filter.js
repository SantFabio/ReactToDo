import Card from "../Card/Card";
import TaskFilterStyled from "./TaskFilterStyled"

export default function Filter(props) {

    function onClearList(event) {
        event.preventDefault();
        props.clearCompletedItems();
    }

    function onSetFilter(event) {
        event.preventDefault();


        const filterType = event.currentTarget.textContent.toLowerCase();
        if (filterType === 'completed') {
            props.setFilter('completed');
        } else if (filterType === 'active') {
            props.setFilter('active');
        } else {
            props.setFilter('all');
        }
    }
    // retorna quantos items faltam para ser concluídos
    function itemsLeft(items) {
        let items_Left = items.filter(
            (item) =>{
                return item.done === false;
            }
        )
        return items_Left.length
    }

    return (
        <>
            <TaskFilterStyled className='taskFilterStats'>
                <div>{itemsLeft(props.items)} items left</div>
                <Card className="taskFilterStats-child2">
                    <div onClick={onSetFilter} className={props.filter === "all" ? "filterInFocus" : ""}>All</div>
                    <div onClick={onSetFilter} className={props.filter === "active" ? "filterInFocus" : ""}>Active</div>
                    <div onClick={onSetFilter} className={props.filter === "completed" ? "filterInFocus" : ""}>Completed</div>
                </Card>
                <div onClick={onClearList}>Clear Completed</div>
            </TaskFilterStyled>
        </>
    )
}