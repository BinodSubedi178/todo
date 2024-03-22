import React from 'react'

const CompletedTasks = ()=> {
  return (
    <div className="no-tasks-display-box container-fluid d-flex">
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" checked/><label htmlFor="checkbox"> Go To Gym</label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" checked/><label htmlFor="checkbox"> Learn ReactJs</label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div><input className='checkbox' type="checkbox" checked/><label htmlFor="checkbox"> Go for a walk</label>
                    </div><i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        
        </div>
  )
}
export default CompletedTasks;