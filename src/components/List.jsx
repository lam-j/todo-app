import React from "react";
import Navigation from "./Navigation.jsx";
import Item from "./TodoItem.jsx";

export default function List(props) {
    return (
        <div className="list">
            <ul>
                {props.itemList.map((item, index) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                            index={index}
                            onDelete={props.onDelete}
                            onComplete={props.onComplete}
                        />
                    );
                })}
            </ul>
            <Navigation itemsLeft={props.itemsLeft} onClear={props.onClear} />
        </div>
    );
}
