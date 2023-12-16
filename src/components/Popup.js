import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

export default function Popup(props) {
    const [show, setShow] = useState(false);
    let hasActionExecuted = useRef(false);

    useEffect(() => {
        if (hasActionExecuted.current && props.items.length < 1) {
            hasActionExecuted.current = false;
        }
        if (props.items.length > 1 && !hasActionExecuted.current) {
            setShow(true)
            hasActionExecuted.current = true;
            let interval = setInterval(() => {
                setShow(false)
                clearInterval(interval);
            }, 3000);
        }
    }, [props.items]);


    return (
        <Card className={show ? "popup show" : "popup"}>
            <span>
                Drag and drop to reorder list
            </span>
        </Card>
    )
}
