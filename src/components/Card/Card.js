import CardStyled from "./CardStyled"

export default function Card(props) {
    return (
        <>
            <CardStyled className={props.className ? `${props.className}` : ''}>
                {props.children}
            </CardStyled>
        </>
    )
}