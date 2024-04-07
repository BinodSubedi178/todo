import React from "react";
import NoTasks from "./NoTasks";

const CreatedTasks = (props) => {
  const { toDoTask } = props;

let handleTrashClick = () =>{
}
  return (
    <div className="no-tasks-display-box container-fluid d-flex">
      <div className="card">
        <div className="card-body">
          <div
            style={{display: "flex", alignItems: "center",justifyContent: "center"}}>
            <input className="checkbox" type="checkbox"
            // checked={checkmark}
            //  onChange = {hadleCheckboxChange}
             />
            <label htmlFor="checkbox">{toDoTask}</label>
          </div>
          <i className="fa-regular fa-trash-can" style={{cursor:"pointer"}}></i>
        </div>
      </div>
    </div>
  );
};
export default CreatedTasks;