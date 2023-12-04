
export default function Footer(props) {
    if (props.items !== null) {
        return (
            <footer>
                <p>
                    {/* Drag and drop to reorder list */}
                </p>
            </footer>
        )
    } else {
        return (
            <footer>
                <p>
                    nada
                </p>
            </footer>
        )
    }
}
