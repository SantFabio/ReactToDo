import { useState } from "react";
import styled from "styled-components";
import ButtonDone from "../styles/ButtonDone"

// estilização que muda dependendo do tema 
const StyledForm = styled.form`
    background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};

    input{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
    input::placeholder{
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
    @media screen and (max-width: 41.4rem) {
        height: 4.8rem;
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
                    <ButtonDone onClick={onAddItem}>
                        <div className="undone"></div>
                    </ButtonDone>
                    <input placeholder="Create a new todo…" type='text' onChange={onText} value={text}/>
            </StyledForm>
        </>
    )
}