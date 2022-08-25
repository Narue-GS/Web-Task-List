import React, { useState } from "react";
import "../App.css"

import AddBtn from "./addBtn";
const AddTesk = ({hendleAdd}) => {
    const [taskData, setTaskData] = useState("")

    const hendleInputChange = (e) =>{
        setTaskData(e.target.value)
    }
    const hendleAddClick = () => {
        hendleAdd(taskData)
    }
    return ( 
        <div className="add-container">
            <input value={taskData} onChange={hendleInputChange} className="add-in" type="text" />
            <AddBtn onClick={hendleAddClick}>Adicionar</AddBtn>
        </div>
     );
}
 
export default AddTesk;