import React from "react";
import Navigation from "./Navigation.jsx";
import Item from "./TodoItem.jsx";

export default function List(props) {
    var itemsLeft = props.itemList.length;
    return (
        <div className="list">
            <ul>
                {props.itemList.map((item, index) => {
                    return (
                        <Item
                            key={item + Date.now()}
                            id={item + Date.now()}
                            index={index}
                            text={item}
                            onDelete={props.onDelete}
                        />
                    );
                })}
            </ul>
            <Navigation itemsLeft={itemsLeft} onClear={props.onClear} />
        </div>
    );
}
