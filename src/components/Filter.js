
export default function Filter(props) {

    function onClearList(event) {
        event.preventDefault();
        props.clearList()
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

    return (
        <>
            <div className='taskFilterStats'>
                <div>{props.items.length} items left</div>
                <div className="taskFilterStats-child2">
                    <div onClick={onSetFilter} className={props.filter === "all" ? "filterInFocus" : ""}>All</div>
                    <div onClick={onSetFilter} className={props.filter === "active" ? "filterInFocus" : ""}>Active</div>
                    <div onClick={onSetFilter} className={props.filter === "completed" ? "filterInFocus" : ""}>Completed</div>
                </div>
                <div onClick={onClearList}>Clear Completed</div>
            </div>
        </>
    )
}