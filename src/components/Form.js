import { useState } from "react";
import styled from "styled-components";

// estilização que muda dependendo do tema 
const StyledForm = styled.form`
    background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
    .undone{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
    }
    input{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
    input::placeholder{
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
`;

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
                    <button className="btn-done" onClick={onAddItem}>
                        <div className="undone"></div>
                    </button>
                    <input placeholder="Create a new todo…" type='text' onChange={onText} value={text}/>
            </StyledForm>
        </>
    )
}