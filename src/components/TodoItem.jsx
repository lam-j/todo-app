import React, { useState } from "react";

export default function TodoItem(props) {
    const [isComplete, setIsComplete] = useState(false);

    function handleClick() {
        setIsComplete(!isComplete);
        document.getElementById(props.id).checked = !isComplete;
    }

    return (
        <li>
            <input id={props.id} type="checkbox" onClick={handleClick} />
            <p
                onClick={handleClick}
                style={{
                    color: isComplete && "hsl(233, 11%, 84%)",
                    textDecorationLine: isComplete && "line-through",
                }}>
                {props.text}
            </p>
            <button
                onClick={() => {
                    props.onDelete(props.index);
                }}>
                <img src="images/icon-cross.svg" alt="delete" />
            </button>
        </li>
    );
}
