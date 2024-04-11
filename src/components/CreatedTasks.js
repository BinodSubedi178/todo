import React, {useState}from "react";

const CreatedTasks = (props) => {
  const { toDoTask, onDelete, index, } = props;
  const [updatedList, setUpdatedList ] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  
  const handleDeleteClick = () =>{
    onDelete(index);
  }
  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.checked)
}
console.log(updatedList)
  return (
    <div className="no-tasks-display-box container-fluid d-flex">
      <div className="card">
        <div className="card-body">
          <div
            style={{display: "flex", alignItems: "center",justifyContent: "center"}}>
            <input className="checkbox" type="checkbox" onChange={handleCheckBoxChange} checked={isChecked}/>
            <label htmlFor="checkbox">{toDoTask}</label>
          </div>
          <i className="fa-regular fa-trash-can" style={{cursor:"pointer"}} onClick={handleDeleteClick}></i>
        </div>
      </div>
    </div>
  );
};
export default CreatedTasks;