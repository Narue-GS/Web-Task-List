import React from "react";

const AddBtn = ({children, onClick}) => {
    return(
    <button className="add-btn" onClick={onClick}>{children}</button>
    )
}

export default AddBtn;