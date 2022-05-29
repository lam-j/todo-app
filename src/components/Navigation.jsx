import React from "react";

export default function Navigation(props) {
    return (
        <div className="navigation">
            <p className="items-remaining">{props.itemsLeft} items left</p>
            <div className="filter desktop">
                <button className="filter-button">All</button>
                <button className="filter-button">Actives</button>
                <button className="filter-button">Completed</button>
            </div>
            <button className="clear" onClick={props.onClear}>
                <p>Clear Completed</p>
            </button>
        </div>
    );
}
