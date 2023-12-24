import { useState } from "react";
import styled from "styled-components";
import ButtonDone from "../styles/ButtonDone"

// estilização que muda dependendo do tema 
const StyledForm = styled.form`
    display: flex;
    align-items: center;
    height: 6.4rem;
    width: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    border-radius: 5px;
    background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};

    input{
        background-color: ${(props) => (props.theme === "light" ? props.theme.colors.primary : props.theme.colors.primary)};
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};;
        border: none;
        font-family: Josefin Sans;
        font-size: 1.8rem;
        width: 75%;
        margin-left: 2.3rem;
        @media screen and (max-width: 41.4rem) {
        font-size: 1.2rem;
    }
    }
    input::placeholder{
        color: ${(props) => (props.theme === "light" ? props.theme.colors.secondary : props.theme.colors.secondary)};
    }
    input:focus {
        outline: none;
        border: none;
        caret-color: #3A7CFD;
    }
    @media screen and (max-width: 41.4rem) {
        height: 4.8rem;
        padding-left: 2.0rem;
        padding-right: 2.0rem;
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