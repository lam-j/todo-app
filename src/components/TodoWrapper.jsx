import React, { useEffect, useState } from "react";
import Input from "./Input.jsx";
import List from "./List.jsx";

export default function TodoWrapper() {
    const [itemList, setItemList] = useState([]);
    const [itemsLeft, setItemsLeft] = useState(0);

    useEffect(() => {
        setItemsLeft(() => {
            let count = 0;
            itemList.forEach((item) => {
                if (item.completed === false) {
                    count++;
                }
            });
            return count;
        });
    });

    function addItem(item) {
        if (item !== "") {
            setItemList((prev) => {
                return [...prev, { text: item, id: item + Date.now(), completed: false }];
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

    function clearCompleted() {
        setItemList((prev) => {
            return prev.filter((item, index) => {
                return !item.completed;
            });
        });
    }

    function handleCompletion(id) {
        setItemList((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    document.getElementById(id + "input").checked = !item.completed;
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            });
        });
    }

    return (
        <div className="todo-wrapper">
            <Input onAdd={addItem} />
            <List
                itemList={itemList}
                onDelete={deleteItem}
                onClear={clearCompleted}
                onComplete={handleCompletion}
                itemsLeft={itemsLeft}
            />
            <div className="footer">Drag and drop to reorder list</div>
        </div>
    );
}
