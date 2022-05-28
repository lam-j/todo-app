import React from "react";

export default function TodoItem(props) {
    return (
        <li>
            <input
                id={props.id + "input"}
                type="checkbox"
                onClick={() => {
                    props.onComplete(props.id);
                }}
            />
            <p
                onClick={() => {
                    props.onComplete(props.id);
                }}
                style={{
                    color: props.completed === true && "hsl(233, 11%, 84%)",
                    textDecorationLine: props.completed === true && "line-through",
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
