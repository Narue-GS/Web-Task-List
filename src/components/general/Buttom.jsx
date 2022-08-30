import React from "react";

const Buttom = ({children, onClick}) => {
    return(
    <button className="add-btn" onClick={onClick}>{children}</button>
    )
}

export default Buttom;