import React, { useContext } from "react";
import todoContext from "../context/todoContext";

const Header = () => {
    const { name } = useContext(todoContext);
    const handleClick = () => {
        console.log("btn click");
        localStorage.removeItem("name-local");
        window.location.reload(false);
    };
    return (
        <div>
            <h1>ToDo App</h1>
            <div className="wel-exit">
                <h5>
                    Welcome <span className="headername">{name}</span>{" "}
                </h5>
                <button id="exitsvg" type="button" onClick={handleClick} className="btn btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-escape" viewBox="0 0 16 16">
                        <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z"></path>
                        <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732l5.096 5.096Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
