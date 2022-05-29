import React from "react";

export default function Filter(props) {
    return (
        <>
            <button onClick={props.filter} className="filter-button" id="all">
                All
            </button>
            <button onClick={props.filter} className="filter-button" id="active">
                Active
            </button>
            <button onClick={props.filter} className="filter-button" id="completed">
                Completed
            </button>
        </>
    );
}
