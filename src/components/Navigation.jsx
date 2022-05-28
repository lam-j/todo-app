import React from "react";

export default function Navigation(props) {
    return (
        <div className="navigation">
            <p className="items-remaining">{props.itemsLeft} items left</p>
            <div className="section-toggle">
                <h4>All</h4>
                <h4>Active</h4>
                <h4>Completed</h4>
            </div>
            <button className="clear" onClick={props.onClear}>
                <p>Clear Completed</p>
            </button>
        </div>
    );
}
