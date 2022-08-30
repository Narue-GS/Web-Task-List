import React, { useState } from "react";
import "../../App.css"

import AddTesk from "./addTesk";
import Task from "./tesk";
const TaskList = ({tasks, hendleAdd, hendleComplete, hendleDelete}) => {
    return (
        <div className="main-box">
            <div className="top-tesk-list">
                <span className="top-tesk-list-title">Minhas Tarefas</span>
            </div>
            <AddTesk hendleAdd={hendleAdd} />
            <div>{tasks.map((task) => (<Task key={task.id} hendleDelete={hendleDelete} hendleComplete={hendleComplete} task={task}/>))}</div>
        </div>
    )
}

export default TaskList;