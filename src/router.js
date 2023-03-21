import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "./components/Home";
import Detail from "./components/detail";
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path ="/" />
                <Route element = { <Detail /> } path ="/detail" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;