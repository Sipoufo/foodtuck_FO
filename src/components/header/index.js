import React from "react";
import { NavLink } from 'react-router-dom'; // Use for redirection with the router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

const IndexHeader = ({setModalMenu}) => {
    return(
        <div className="flex flex-col w-full bg-black text-white text-sm">
            <div className="flex w-full justify-center py-4 px-5">
                <div className="flex flex-row w-full h-10 justify-between items-center max-w-screen-xl gap-6">
                    <div className="w-24 h-full flex">
                        <img src={process.env.PUBLIC_URL + "/images/logo/Foodtuck.png"} alt="logo" className="object-contain" />
                    </div>
                    <div className="hidden md:flex h-full items-center">
                        <ul className='flex flex-row justify-between gap-4 items-center'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/menu'>Menu</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/page'>Pages</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/shop'>Shop</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-row h-full gap-4 items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
                        <FontAwesomeIcon icon={faUser} className="text-sm" />
                        <FontAwesomeIcon icon={faBagShopping} className="text-sm" />
                    </div>

                    {/* Tablet or phone mode */}
                    <div className="md:hidden flex items-center">
                        <button><FontAwesomeIcon icon={faBars} onClick={() => setModalMenu(true)} /></button>
                    </div>
                </div>
            </div>
            {/* <div className="flex relative w-full h-40">
                <img src={process.env.PUBLIC_URL + "/images/image1.png"} alt="bgTitle" className="object-none object-center w-full h-full" />
            </div> */}
        </div>
    )
}

export default IndexHeader;