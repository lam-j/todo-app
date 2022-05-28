import React, { useState } from "react";
import Input from "./Input.jsx";
import List from "./List.jsx";

export default function TodoWrapper() {
    const [itemList, setItemList] = useState([]);

    function addItem(item) {
        if (item !== "") {
            setItemList((prev) => {
                return [...prev, item];
            });
        }
    }

    function deleteItem(itemIndex) {
        setItemList((prev) => {
            return prev.filter((item, index) => {
                return index !== itemIndex;
            });
        });
    }

    function clearAll() {
        setItemList([]);
    }

    return (
        <div className="todo-wrapper">
            <Input onAdd={addItem} />
            <List itemList={itemList} onDelete={deleteItem} onClear={clearAll} />
            <div className="footer">Drag and drop to reorder list</div>
        </div>
    );
}
