import React from "react";
import Item from "./TodoItem.jsx";
import Filter from "./Filter.jsx";

export default function List(props) {
    let list = props.itemList;

    if (props.filterStatus === "") {
        list = props.itemList;
    } else {
        list = props.filteredList;
    }

    return (
        <>
            <div className="list">
                <ul>
                    {list.map((item, index) => {
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

                <div className="navigation">
                    <p className="items-remaining">{props.itemsLeft} items left</p>
                    <div className="filter desktop">
                        <Filter filter={props.filter} />
                    </div>
                    <button className="clear" onClick={props.onClear}>
                        <p>Clear Completed</p>
                    </button>
                </div>
            </div>
            <div className="filter mobile">
                <Filter filter={props.filter} />
            </div>
        </>
    );
}
