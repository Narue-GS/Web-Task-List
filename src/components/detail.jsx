import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
  
import Buttom from "./general/Buttom"
const Detail = () => {
    return ( 
        <div className="main-box">
            <div className="top-tesk-list">
                <span className="top-tesk-list-title">Minhas Tarefas</span>
            </div>
            <p className="detail-text">Text</p>
            <div className="bottom-tesk-list-title">
                <Link to={"/"}><Buttom>Voltar</Buttom></Link>
            </div>
        </div>
     );
}
 
export default Detail;