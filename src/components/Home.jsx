import React, {useState} from "react";
import {v4} from "uuid"
import TaskList from "./home/tesk-list";
const Home = () => {
    const date = new Date()
    const [tasks, setTasks] = useState([
        {name:"Dominar React", completed:false, day:date.getDate(), month:date.getMonth(), year:date.getFullYear(), id:v4()},
        {name:"Dominar o mundo", completed:false, day:date.getDate(), month:date.getMonth(), year:date.getFullYear(), id:v4()}
      ])
      const hendleAdd = (taskName) => {
        let update = [...tasks, {
          name: taskName,
          completed: false,
          day:date.getDate(),
           month:date.getMonth(),
           year:date.getFullYear(),
          id: v4(),
        }]
        console.log(update);
        setTasks(update);
      }
      const hendleComplete = (id) => {
        const update = tasks.map(task =>{
          if (task.id === id) return{...task, completed: !task.completed}
          return task
        })
        setTasks(update)
      }
      const hendleDelete = (id) => {
        let update = tasks.filter((tk) => tk.id !== id)
        setTasks(update)
      }
      return (
        <>
          <TaskList hendleDelete={hendleDelete} hendleAdd={hendleAdd} hendleComplete={hendleComplete} tasks={tasks}/>
        </>
      )
}

export default Home;