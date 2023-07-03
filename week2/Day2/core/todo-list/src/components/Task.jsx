import React from 'react'

const Task =( props) => {

    const { task, handleToggleCheck, handleDestroyTask, idx } = props;

    return (
        <div className="display">
            <div className="col-4 mx-auto d-flex flex justify-content-between" style={{display:"flex", flexDirection:"row",alignItems:"center"}} >
                 <br/>
                 <input 
                    type="checkbox" 
                    className="form-control col-1" 
                    checked={ task.isCompleted }
                    onChange={(e) => handleToggleCheck( e, idx )}
                />
                <h2 className="col-2" style={ task.isCompleted ? { textDecoration:"line-through"} : {} }>{ task.title }</h2>

                <button className="btn btn-dark text-light btn-small" onClick={(e) => handleDestroyTask(e, idx)}>Delete</button>
            </div>
        </div>
    )
}

export default Task