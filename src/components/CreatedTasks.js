import React from "react";
import NoTasks from "./NoTasks";

const CreatedTasks = (props) => {
  const { toDoTask, onDelete, index} = props;

  const handleDeleteClick = () =>{
    onDelete(index);
  }

  return (
    <div className="no-tasks-display-box container-fluid d-flex">
      <div className="card">
        <div className="card-body">
          <div
            style={{display: "flex", alignItems: "center",justifyContent: "center"}}>
            <input className="checkbox" type="checkbox"
            // checked={checkmark}        
             />
            <label htmlFor="checkbox">{toDoTask}</label>
          </div>
          <i className="fa-regular fa-trash-can" style={{cursor:"pointer"}} onClick={handleDeleteClick}></i>
        </div>
      </div>
    </div>
  );
};
export default CreatedTasks;