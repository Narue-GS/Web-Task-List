import React, { useState } from "react";
import "../App.css"

import AddTesk from "./addTesk";
import Task from "./tesk";
const TaskList = ({tasks, hendleAdd}) => {
    return (
        <div className="main-box">
            <div className="top-tesk-list"></div>
            <AddTesk hendleAdd={hendleAdd} />
            <div>{tasks.map((task) => (<Task key={task.id} task={task}/>))}</div>
        </div>
    )
}

export default TaskList;