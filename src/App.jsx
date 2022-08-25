import React, { useState } from "react"
import "./App.css"
import Header from "./components/header"
import TaskList from "./components/tesk-list"
const App = () => {
  const [tasks, setTasks] = useState([
    {name:"Dominar React", complited:false, id:0},
  ])
  const hendleAdd = (taskName) => {
    let update = [...tasks, {
      name: taskName,
      complited: false,
      id: Math.random(999),
    }]
    setTasks(update);
  }
  return (
    <>
      <Header />
      <TaskList hendleAdd={hendleAdd} tasks={tasks}/>
    </>
  )
}

export default App;
