import React, { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper.jsx";

function App() {
    const [currentMode, setCurrentMode] = useState("light");

    useEffect(() => {
        // Check if there is a previously stored mode
        if (localStorage.getItem("displayMode") !== null) {
            setCurrentMode(localStorage.getItem("displayMode"));
        } else {
            // if this is the first visit, create the local storage with the default (light) mode
            localStorage.setItem("displayMode", "light");
        }
    }, []);

    useEffect(() => {
        const mode = document.querySelector(".background");
        if (currentMode === "light") {
            mode.classList.remove("dark");
        } else {
            mode.classList.add("dark");
        }
    }, [currentMode]);

    function toggleMode() {
        setCurrentMode((prev) => {
            if (prev === "light") {
                localStorage.setItem("displayMode", "dark");
                return "dark";
            } else {
                localStorage.setItem("displayMode", "light");
                return "light";
            }
        });
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
                    <TodoWrapper currentMode={currentMode} />
                </div>
            </div>
        </div>
    );
}

export default App;
