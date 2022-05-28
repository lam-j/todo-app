import React from "react";
import TodoWrapper from "./components/TodoWrapper.jsx";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="title">
                    <h1>TODO</h1>
                    <button>
                        <img src="/images/icon-moon.svg" alt="" />
                    </button>
                </div>
                <TodoWrapper />
            </div>
        </div>
    );
}

export default App;
