import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import todoContext from "../../context/todoContext";

const Input = () => {
    const [value, setValue] = useState({ content: "" });
    const { todos, setTodos } = useContext(todoContext);
    const inputArea = document.getElementById("inputArea");

    const getUser = () => {
        axios.get("https://631196f319eb631f9d751133.mockapi.io/todos").then(async (res) => {
            await setTodos(res.data);
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (value.content === "") {
            return false;
        }

        axios.post("https://631196f319eb631f9d751133.mockapi.io/todos", value).then((res) => {
            setTodos([...todos, value]);
            getUser();
            return res;
        });

        inputArea.value = "";
    };

    useEffect(() => {
        axios.get("https://631196f319eb631f9d751133.mockapi.io/todos").then(async (res) => {
            await setTodos(res.data);
        });
    }, [todos.lenght, setTodos]);

    return (
        <div className="container m-2">
            <form className="frm row" onSubmit={onSubmit}>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {" "}
                    <input
                        id="inputArea"
                        minLength={3}
                        className="form-control form-control-lg my-input "
                        onChange={(e) => {
                            setValue({ content: e.target.value });
                        }}
                        placeholder="add to new todo"
                        autoFocus
                    />
                </div>
                <div className="col-sm-2">
                    {" "}
                    <button className="my-btn btn btn-light btn-lg" type="submit">
                        Add
                    </button>
                </div>
                <div className="col-sm-2"></div>
            </form>
        </div>
    );
};

export default Input;
