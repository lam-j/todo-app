import React, { useState } from "react";

export default function Input(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(e) {
        const newText = e.target.value;
        setInputText(newText);
    }

    return (
        <div className="input">
            <input type="checkbox" />
            <input
                onChange={handleChange}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        props.onAdd(inputText);
                        setInputText("");
                    }
                }}
                value={inputText}
                type="text"
                placeholder="Create a new todo..."
            />
        </div>
    );
}
