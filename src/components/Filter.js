export default function Filter(props){
    function clearList(event) {
        event.preventDefault();
    }
    return(
        <>
            <div className='taskFilterStats'>
                    <div>{props.items.length} items left</div>
                    <div className="taskFilterStats-child2">
                        <div>All</div>
                        <div>Active</div>
                        <div>Completed</div>
                    </div>
                    <div onClick={clearList}>Clear Completed</div>
                </div>
        </>
    )
}