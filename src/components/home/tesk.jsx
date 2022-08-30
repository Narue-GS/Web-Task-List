import React from "react";
import "../../App.css"

import { MdDeleteForever } from 'react-icons/md';

const Task = ({ task, hendleComplete, hendleDelete }) => {
    return(
        <div
          className="task"
          style={
            task.completed ?{
                animationName:"completed",
            }
            : {}}>
                <div className="taskName" onClick={() =>hendleComplete(task.id)}>{task.name}</div>
                <button className="close" onClick={() =>hendleDelete(task.id)}><MdDeleteForever /></button>
        </div>
    )
}
 
export default Task;