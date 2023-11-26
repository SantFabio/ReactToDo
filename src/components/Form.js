import { useState } from "react";

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
            <form>
                <input type='text' onChange={onText} value={text}></input>
                <button onClick={onAddItem}>x</button>
            </form>
        </>
    )
}