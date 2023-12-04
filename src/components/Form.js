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
                    <button className="btn-done" onClick={onAddItem}><div className="undone"></div></button>
                    <input placeholder="Create a new todo…" type='text' onChange={onText} value={text}/>
            </form>
        </>
    )
}