import React, { useContext } from "react";
import todoContext from "../context/todoContext";

const Modal = () => {
    const button = document.getElementById("my-namebtn");
    const minName = document.getElementById("min-name");
    const { setName } = useContext(todoContext);

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);

        if (e.target.value.length >= 3) {
            button.setAttribute("data-bs-dismiss", "modal");
            minName.style.color = "blue";
            minName.textContent = "Succesfully";
        } else {
            minName.style.color = "red";
            minName.textContent = "Minumum of 3 characters";
            button.removeAttribute("data-bs-dismiss");
        }
    };

    return (
        <div>
            <button id="btn-my" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Please Enter A Name
                            </h5>
                            <p id="min-name">Minumum of 3 characters</p>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    @
                                </span>
                                <input name="username" onChange={handleChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id="my-namebtn" type="submit" className="btn btn-primary">
                                Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
