import React from "react";
import "../App.css"

const Task = ({ task }) => {
    return(
        <p className="task">{task.name}</p>
    )
}
 
export default Task;