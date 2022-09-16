import React, { useContext, useEffect, useState } from "react";
import todoContext from "../../context/todoContext";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function List() {
    const { todos, setTodos } = useContext(todoContext);

    const [currentTodo, setCurrentTodo] = useState({ content: "" });
    const inputDoing = document.getElementsByName("inputDoing");

    useEffect(() => {
        axios.get("https://631196f319eb631f9d751133.mockapi.io/todos").then(async (res) => {
            await setTodos(res.data);
        });
    }, [setTodos]);

    useEffect(() => {
        const listDiv = document.getElementById("testid");

        listDiv.scrollTo(0, 0);
    });

    function inputControl() {
        inputDoing.forEach((x, i) => {
            if (x.checked) {
                inputDoing[i].parentNode.parentNode.classList.add("completed");
            } else {
                inputDoing[i].parentNode.parentNode.classList.remove("completed");
            }
        });
    }

    const destroyToDo = async (i) => {
        await axios.delete(`https://631196f319eb631f9d751133.mockapi.io/todos/${todos[i].id}`).then(() => {
            console.log("succesfully deleted");
        });

        const newTodos = todos.filter((t) => t.id !== todos[i].id);
        setTodos(newTodos);
    };

    const editTodo = async (i) => {
        await setCurrentTodo({ ...todos[i] });
    };

    const deditTodo = async (i) => {
        axios.put(`https://631196f319eb631f9d751133.mockapi.io/todos/${currentTodo.id}`, { ...currentTodo, content: currentTodo.content }).then(() => {
            axios.get("https://631196f319eb631f9d751133.mockapi.io/todos").then(async (res) => {
                await setTodos(res.data);
            });
        });
    };

    return (
        <div id="list-div">
            <section>
                <ul className="todo-list" id="testid">
                    {todos
                        .map((x, i) => (
                            <li key={i} id={i}>
                                <div className="todo">
                                    <input id="inputCheck" name="inputDoing" onClick={() => inputControl()} className="toggle" type="checkbox" />

                                    <label> {x.content} </label>
                                    <i className="bi bi-pencil-sequare"></i>
                                    <button type="button" className="btn-close btn-close-white destroy" onClick={() => destroyToDo(i)}></button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#editModal" id="edit" onClick={() => editTodo(i)}>
                                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                                    </button>
                                </div>

                                {/* Modal */}
                                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="editModalLabel">
                                                    Edit ToDo
                                                </h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                                <input
                                                    id="modalInput"
                                                    label="modalInput"
                                                    name="modalInput"
                                                    value={currentTodo?.content}
                                                    onChange={(e) => {
                                                        setCurrentTodo({ ...currentTodo, content: e.target.value });
                                                    }}
                                                ></input>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button onClick={() => deditTodo(i)} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                        .reverse()}
                </ul>
            </section>
        </div>
    );
}

export default List;
