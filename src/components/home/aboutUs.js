import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutUs = () => {
    return(
        <div className="flex w-full justify-center text-white bg-black py-10">
            <div className="flex flex-row max-w-screen-xl w-full justify-center items-center">
                <div className="flex flex-col gap-4 w-5/12 text-xs">
                    <h1 className="font-great-vibes text-primary-color text-lg">About us</h1>
                    <h2 className="font-extrabold text-4xl"><span className="text-primary-color">We</span> Create the best foody product</h2>
                    <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <ul className="flex flex-col gap-3">
                        <li><FontAwesomeIcon icon={faCheck} className="ml-2"/> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="ml-2"/> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
                        <li><FontAwesomeIcon icon={faCheck} className="ml-2"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                    <div className="w-full flex justify-start">
                        <button className="px-6 py-2 bg-primary-color rounded-3xl">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col w-5/12 gap-3 h-96">
                    <div className="flex w-full h-1/2">
                        <img src={process.env.PUBLIC_URL + "/images/image4.png"} alt="imageAbout1" className="w-full h-full object-cover object-center rounded-lg" />
                    </div>
                    <div className="flex flex-row gap-3 w-full h-1/2">
                        <img src={process.env.PUBLIC_URL + "/images/image5.png"} alt="imageAbout1" className="w-1/2 h-full object-cover object-center rounded-lg"/>
                        <img src={process.env.PUBLIC_URL + "/images/image6.png"} alt="imageAbout1" className="w-1/2 h-full object-cover object-center rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;