import React, { useEffect, useState } from "react";
import Input from "./Input.jsx";
import List from "./List.jsx";

export default function TodoWrapper() {
    const [itemList, setItemList] = useState([]);
    const [itemsLeft, setItemsLeft] = useState(0);
    const [filterStatus, setFilterStatus] = useState("");
    const [filteredList, setFilteredList] = useState([]);

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
    }, [itemList]);

    useEffect(() => {
        filterList();
    }, [filterStatus]);

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

    function filterList() {
        switch (filterStatus) {
            case "all":
                setFilteredList(itemList);
                break;
            case "active":
                setFilteredList(() => {
                    return itemList.filter((item) => {
                        return item.completed === false;
                    });
                });
                break;
            case "completed":
                setFilteredList(() => {
                    return itemList.filter((item) => {
                        return item.completed === true;
                    });
                });
                break;
            default:
                setFilteredList(itemList);
                break;
        }
    }

    function filterClass(e) {
        const filterButtons = document.querySelectorAll(".filter-button");

        filterButtons.forEach((button) => {
            if (button.classList.contains("active")) {
                button.classList.toggle("active");
            } else {
                filterButtons.forEach((button) => {
                    button.classList.remove("active");
                });
            }
        });

        e.target.classList.add("active");
        setFilterStatus(e.target.id);
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
                filter={filterClass}
                filteredList={filteredList}
            />
            <div className="footer">Drag and drop to reorder list</div>
        </div>
    );
}
