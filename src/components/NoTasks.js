import React from "react";

const NoTasks = (props) => {
  let {noTaskOpacity} = props;
  return (
    <div className="no-tasks-display-box container-fluid d-flex" style={{opacity:{noTaskOpacity}}}>
      <i
        className="fa-regular fa-clipboard-list"
        style={{
          fontSize: "2.5rem",
          color: "#888888",
          margin: "20px 0 30px 0",
        }}
      ></i>
      <h6>You don't have any tasks created yet</h6>
      <p>Create tasks and organize your to-do items</p>
    </div>
  );
};
  NoTasks.defaultProps ={
    noTaskOpacity:"100"
  }
export default NoTasks;
