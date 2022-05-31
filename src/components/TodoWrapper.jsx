import React, { useEffect, useState } from "react";
import Input from "./Input.jsx";
import List from "./List.jsx";

export default function TodoWrapper() {
    const [itemList, setItemList] = useState([]);
    const [itemsLeft, setItemsLeft] = useState(0);
    const [filterStatus, setFilterStatus] = useState("all");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        // Check if there are previously stored todo items
        if (JSON.parse(localStorage.getItem("todos")) !== null) {
            if (JSON.parse(localStorage.getItem("todos")).length > 0) {
                setItemList(JSON.parse(localStorage.getItem("todos")));
            }
        } else {
            // if this is the first visit, create local storage
            localStorage.setItem("todos", []);
        }
    }, []);

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
        localStorage.setItem("todos", JSON.stringify(itemList));
    }, [itemList]);

    useEffect(() => {
        switch (filterStatus) {
            case "active":
                setFilteredList(() => {
                    return itemList.filter((item) => {
                        return item.completed === false;
                    });
                });
                break;
            case "completed":
                setFilteredList(() => {
                    return itemList.filter((item) => item.completed === true);
                });
                break;
            default:
                setFilteredList(itemList);
        }
    }, [itemList, filterStatus]);

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

    function handleFilter(e) {
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
                filter={handleFilter}
                filteredList={filteredList}
            />
            {/* <div className="footer">Drag and drop to reorder list</div> */}
        </div>
    );
}
