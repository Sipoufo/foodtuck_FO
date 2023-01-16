import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../components";
import IndexHome from "../components/home";
import OnChoosePick from "../components/home/choosePick/onChoosePicks";

/**
 *  This function is a starting point of your router module
 *  It will contain all of router
 */
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />} >
                <Route path="/" element={<IndexHome />}>
                    <Route index element={<OnChoosePick/>} />
                </Route>
            </Route>
        </Routes>
    )
};

export default Router;