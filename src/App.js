import React, { useState } from "react";
import TodoWrapper from "./components/TodoWrapper.jsx";

function App() {
    const [currentMode, setCurrentMode] = useState("light");

    function toggleMode() {
        setCurrentMode((prev) => {
            if (prev === "light") {
                return "dark";
            } else {
                return "light";
            }
        });

        const mode = document.querySelector(".background");
        if (currentMode === "light") {
            mode.classList.add("dark");
        } else {
            mode.classList.remove("dark");
        }
    }

    return (
        <div className="background">
            <div className="App">
                <div className="wrapper">
                    <div className="title">
                        <h1>TODO</h1>
                        <button onClick={toggleMode}>
                            <img className="light-mode" src="/images/icon-moon.svg" alt="" />
                            <img className="dark-mode" src="/images/icon-sun.svg" alt="" />
                        </button>
                    </div>
                    <TodoWrapper />
                </div>
            </div>
        </div>
    );
}

export default App;
