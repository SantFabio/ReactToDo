import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Popup(props) {
    const [show, setShow] = useState(true);

    useEffect(() => {

        if (props.items.length === 2) {
            setShow(true)
            let interval = setInterval(() => {
                setShow(false)
                clearInterval(interval);
            }, 3000);
        }
   
    }, [props.items]);

    useEffect(()=>{
            setShow(true)
            let interval = setInterval(() => {
                setShow(false)
                clearInterval(interval);
            }, 3000);

    },[])

    return (
        <Card className={show ? "popup show" : "popup"}>
            <span>
                Drag and drop to reorder list
            </span>
        </Card>
    )
}
