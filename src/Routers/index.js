import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../components";
import IndexHome from "../components/home";

/**
 *  This function is a starting point of your router module
 *  It will contain all of router
 */
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />} >
                <Route index element={<IndexHome />}/>
            </Route>
        </Routes>
    )
};

export default Router;