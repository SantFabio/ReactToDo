import { useState } from "react"
import ButtonDone from "../../styles/ButtonDone"
import StyledForm from "./StyledForm"

export default function Form(props) {
    const [text, setText] = useState("");

    function onText(event) {
        let txt = event.target.value;
        setText(txt);
    }
    function onAddItem(event) {
        event.preventDefault();
        if (text) {
            props.addItems(text);
            setText("");
        }
    }
    return (
        <>
            <StyledForm className="form">
                    <ButtonDone onClick={onAddItem}>
                        <div className="undone"></div>
                    </ButtonDone>
                    <input placeholder="Create a new todo…" type='text' onChange={onText} value={text}/>
            </StyledForm>
        </>
    )
}