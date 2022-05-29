import React from "react";
import TodoWrapper from "./components/TodoWrapper.jsx";

function App() {
    function toggleMode() {
        const mode = document.querySelector(".background");
        if (mode.classList.contains("dark")) {
            mode.classList.toggle("dark");
        } else {
            mode.classList.add("dark");
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
