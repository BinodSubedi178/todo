import React from "react";
import CompletedTasks from "./CompletedTasks";
import CreatedTasks from "./CreatedTasks";
import NoTasks from "./NoTasks";

const Input = (props) => {
    return (
        <>
            <div className="container-fluid list-input-area">
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                    />
                    <div style={{ display: "flex", margin: "1px 0 1px 6px" }}>
                        <button type="button" id="create-button" className="btn btn-primary btn-md">
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
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                9
                            </span>
                        </h5>
                    </div>
                </div>
                <div className="container-fluid d-flex completed-tasks tasks">
                    <div className="badge badge-right">
                        <h5 className="position-relative">
                            Completed Tasks
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                9
                            </span>
                        </h5>
                    </div>
                </div>
                </div>
                <div style={{width:"100%"}}><hr className="horizontal-line" /></div>
                <NoTasks/>
                <CreatedTasks/>
                <CompletedTasks/>
            </div>
        </>
    );
};
export default Input;
