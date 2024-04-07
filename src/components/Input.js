import React, { useState, useEffect } from "react";
import CreatedTasks from "./CreatedTasks";
import NoTasks from "./NoTasks";
import Error from "./Error";
import { render } from "@testing-library/react";

const Input = () => {
  const [inputFieldValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const deleteButtonHandler = ()=>{
    console.log("Hello");
  }

  const createTodoItem = () => {
    if (inputFieldValue.trim()) {
      setToDoList([...toDoList, inputFieldValue]);
      setInputValue('');
    } else {
      render(<Error />);
    }
  };
  const handleKeyPress =(event)=>{
    if (event.key === "Enter"){
      createTodoItem();
      console.log("Enter is being pressed properly")
    }
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };
  return (
    <>
      <div className="container-fluid list-input-area">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            value={inputFieldValue}
            onChange={handleInputChange}
            onKeyPress ={handleKeyPress}
          />
          <div style={{ display: "flex", margin: "1px 0 1px 6px" }}>
            <button
              type="button"
              className="btn btn-primary btn-md"
              onClick={createTodoItem}
            >
              Create <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="box container-fluid d-flex">
        <div className="tasks-group">
          <div className="container-fluid d-flex created-tasks tasks">
            <div className="badge badge-left">
              <h5 className="position-relative">
                Created Tasks
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{toDoList.length}</span>
              </h5>
            </div>
          </div>
          <div className="container-fluid d-flex completed-tasks tasks">
            <div className="badge badge-right">
              <h5 className="position-relative">
              Completed Tasks
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">N/A</span>
              </h5>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <hr className="horizontal-line" />
        </div>
        <div>
        {toDoList.map((task)=>{
          console.log(toDoList)
          return(
            < CreatedTasks key={task} toDoTask = {task}/>
          )
        })}
        </div>
      </div>
    </>
  );
};
export default Input;
