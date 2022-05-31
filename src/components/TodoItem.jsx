import React from "react";

export default function TodoItem(props) {
    const style = {
        color: props.completed === true && isDark(),
        textDecorationLine: props.completed === true && "line-through",
    };

    function isDark() {
        if (props.currentMode === "dark") {
            return "hsl(233, 14%, 35%)";
        } else {
            return "hsl(233, 11%, 84%)";
        }
    }

    return (
        <li
            onClick={() => {
                props.onComplete(props.id);
            }}>
            <input id={props.id + "input"} type="checkbox" defaultChecked={props.completed} />
            <p style={style}>{props.text}</p>
            <button
                onClick={() => {
                    props.onDelete(props.index);
                }}>
                <img src="images/icon-cross.svg" alt="delete" />
            </button>
        </li>
    );
}
