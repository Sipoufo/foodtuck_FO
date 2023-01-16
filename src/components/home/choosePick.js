import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const ChoosePick = () => {
    return(
        <div className="flex w-full justify-center text-white bg-black py-10">
            <div className="flex flex-col max-w-screen-xl w-full justify-center items-center gap-4">
                <p className="w-full text-center text-2xl md:text-3xl text-primary-color font-great-vibes">
                    Choose & pick
                </p>
                <p className="w-full text-center text-4xl font-extrabold">
                    <span className="text-primary-color">Fr</span>om our menu
                </p>
                <ul className="flex flex-row gap-8 w-full overflow-hidden md:overflow-x-auto">
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            BreakFast
                        </NavLink>
                    </li>
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            Lunch
                        </NavLink>
                    </li>
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            Diner
                        </NavLink>
                    </li>
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            Dessert
                        </NavLink>
                    </li>
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            Drink
                        </NavLink>
                    </li>
                    <li className="w-1/6 flex justify-start items-center">
                        <NavLink to="/choose/freakFast" className={isActive => "font-semibold" + (!isActive ? "text-primary-color" : "") }>
                            Snack
                        </NavLink>
                    </li>
                </ul>
                <div className="w-full flex">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ChoosePick;