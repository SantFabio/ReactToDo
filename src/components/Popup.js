import React, { useState, useEffect } from 'react';
import Card from './Card'; // Ajuste o caminho conforme necessário

export default function Popup(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Atualiza o estado com base na condição props.items.length > 1
        setShow(props.items.length > 1);
    }, [props.items]);

    // Renderiza o componente com base no estado show
    return (
        <Card className={show ? "popup show" : "popup"}>
            <span>
                Drag and drop to reorder list
            </span>
        </Card>
    ) 
}
