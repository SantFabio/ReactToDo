import styled from "styled-components"
import List from "./List"

const MainStyled = styled.main`
    background-color: ${(props)=> (props.theme === 'light' ? props.theme.colors.primary : props.theme.colors.primary)};
    box-shadow: 0px 35px 50px -15px ${(props)=> (props.theme === 'light' ? props.theme.colors.fourth : props.theme.colors.fourth)};
    border-radius: 5px;
`;

export default function Main(props) {
    return (
        <>
            <MainStyled className='main'>
                <List filter={props.filter} setFilter={props.setFilter} onDone={props.onDone} deleteItem={props.deleteItem} items={props.items} clearList={props.clearList} />
            </MainStyled>
        </>
    )
}