import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Popup(props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (props.items.length > 1 ) {
            setShow(true)
            localStorage.setItem("marker", true)
            let interval = setInterval(() => {
                setShow(false)
                clearInterval(interval);
            }, 5000);
        }
        console.log(true);
    }, [props.items]);

    return (
        <Card className={show ? "popup show" : "popup"}>
            <span>
                Drag and drop to reorder list
            </span>
        </Card>
    )
}
