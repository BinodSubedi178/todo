import React from 'react'

const CreatedTasks = () => {
    return (
        <div className="no-tasks-display-box container-fluid d-flex">
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" /><label htmlFor="checkbox"></label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" /><label htmlFor="checkbox"> Learn Python</label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" /><label htmlFor="checkbox"> Learn Animation</label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        </div>
    )
}
export default CreatedTasks;