import React, { useState } from "react";
import "../../App.css"
import IsValid from "../../validations";
import Buttom from "../general/Buttom";
const AddTesk = ({hendleAdd}) => {
    const [taskData, setTaskData] = useState("")

    const hendleInputChange = (e) =>{
        setTaskData(e.target.value)
    }
    const hendleAddClick = () => {
        if(IsValid.task(taskData)) {
            hendleAdd(taskData)
            setTaskData("")
        }
        else {
            alert("nop")
        }
    }
    return ( 
        <div className="add-container">
            <input value={taskData} onChange={hendleInputChange} className="add-in" type="text" />
            <Buttom onClick={hendleAddClick}>Adicionar</Buttom>
        </div>
     );
}
 
export default AddTesk;