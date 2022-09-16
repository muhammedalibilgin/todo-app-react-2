import { createContext, useState, useEffect } from "react";

const todoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState(localStorage.getItem("name-local") ? JSON.parse(localStorage.getItem("name-local")) : null);

    //check local storage have a name
    useEffect(() => {
        const isLocalStorage = localStorage.getItem("name-local");
        // const isLocalStorage = JSON.parse(localStorage.getItem("name-local"));
        if (!isLocalStorage) {
            document.getElementById("btn-my").click();
        }
    }, []);

    //if create name save the name in localstorage
    useEffect(() => {
        if (name) {
            localStorage.setItem("name-local", JSON.stringify(name));
        }
    }, [name]);

    const values = { todos, setTodos, name, setName };

    return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default todoContext;
