import { faFacebookF, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {

    return(
        
        <div className="flex relative w-full h-96">
            <img src={process.env.PUBLIC_URL + "/images/image3.png"} alt="bgTitle" className="object-cover object-center w-full h-full" />
            <div className="absolute w-full h-full bg-black bg-opacity-90"></div>
            <div className="absolute flex w-full h-full justify-center">
                <div className="flex w-full max-w-screen-lg px-2 p-4">
                    <div className="flex w-full justify-between gap-4">
                        <div className="w-4/12 flex flex-row gap-6 h-8/12 items-center">
                            <div className="flex flex-col h-full justify-between items-center gap-4">
                                <div className="border-l border-l-white h-2/6"></div>
                                <div className="h-2/6 flex flex-col justify-between">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-sm text-white" />
                                    <FontAwesomeIcon icon={faTwitter} className="text-sm text-white" />
                                    <FontAwesomeIcon icon={faPinterest} className="text-sm text-white" />
                                </div>
                                <div className="border-l border-l-white h-2/6"></div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-great-vibes text-primary-color text-lg">Its Quick & Amusing!</p>
                                <p className="text-3xl font-extrabold"><span className="text-primary-color">Th</span>e Art of speed food Quality</p>
                                <p className="text-xs font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                                <div className="flex w-full">
                                    <button className="px-4 py-2 bg-primary-color rounded-3xl">See menu</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 flex">
                            <img src={process.env.PUBLIC_URL + "/images/image.png"} alt="bgTitle" className="object-container" />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header;