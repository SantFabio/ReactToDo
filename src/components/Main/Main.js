import List from "../List/List"
import MainStyled from "./MainStyled"

export default function Main(props) {
    return (
        <>
            <MainStyled className='main'>
                <List filter={props.filter} setFilter={props.setFilter} onDone={props.onDone} deleteItem={props.deleteItem} items={props.items} clearCompletedItems={props.clearCompletedItems} />
            </MainStyled>
        </>
    )
}