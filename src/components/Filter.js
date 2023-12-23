import styled from "styled-components";

const TaskFilterStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem 0 2.4rem;
    font-size: 1.4rem;
    height: 5.0rem;
    color: #9495A5;
    div:last-child:hover {
        cursor: pointer;
        color: #494C6B;
    }
    .taskFilterStats-child2{
        display: flex;
        justify-content: space-between;
        width: 15.6rem;
        font-weight: 700;
            @media screen and (max-width: 41.4rem) {
                position: absolute;
                display: flex;
                align-items: center;
                background-color: pink;
                top: 100px;
            }
    }
    .taskFilterStats-child2 > div:hover{
        color: #494C6B;
        cursor: pointer;
    }

`;
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
            <TaskFilterStyled className='taskFilterStats'>
                <div>{props.items.length} items left</div>
                <div className="taskFilterStats-child2">
                    <div onClick={onSetFilter} className={props.filter === "all" ? "filterInFocus" : ""}>All</div>
                    <div onClick={onSetFilter} className={props.filter === "active" ? "filterInFocus" : ""}>Active</div>
                    <div onClick={onSetFilter} className={props.filter === "completed" ? "filterInFocus" : ""}>Completed</div>
                </div>
                <div onClick={onClearList}>Clear Completed</div>
            </TaskFilterStyled>
        </>
    )
}