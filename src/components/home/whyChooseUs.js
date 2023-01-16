import { faBurger, faCookieBite, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhyChooseUs = () => {
    return(
        <div className="flex w-full justify-center text-white bg-black py-10 text-xs">
            <div className="flex flex-row max-w-screen-xl w-full justify-center items-center px-10">
                <div className="hidden md:flex w-10/12">

                </div>
                <div className="flex w-fit">
                    <div className="flex flex-col gap-4 w-full items-center">
                        <p className="w-full text-2xl md:text-3xl text-primary-color font-great-vibes">
                            Why Choose us
                        </p>
                        <p className="w-full text-4xl font-extrabold">
                            <span className="text-primary-color">Ex</span>ta ordinary taste And Experienced
                        </p>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>
                        <div className="w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex w-full h-20 bg-primary-color rounded-lg justify-center items-center">
                                    <FontAwesomeIcon icon={faBurger} className="text-5xl" />
                                </div>
                                <p className="ml-2">Fast Food</p>
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex w-full h-20 bg-primary-color rounded-lg justify-center items-center">
                                    <FontAwesomeIcon icon={faCookieBite} className="text-5xl" />
                                </div>
                                <p className="ml-2">Lunch</p>
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex w-full h-20 bg-primary-color rounded-lg justify-center items-center">
                                    <FontAwesomeIcon icon={faWineGlass} className="text-5xl" />
                                </div>
                                <p className="ml-2">Dinner</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-8/12 flex flex-row bg-white text-black rounded-md overflow-hidden">
                                <div className="w-4 bg-primary-color"></div>
                                <div className="flex grow px-2 py-3 justify-between">
                                    <p className="text-3xl text-primary-color font-extrabold">
                                        30+
                                    </p>
                                    <p className="text-lg">
                                        Years of <span className="font-semibold">Experienced</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WhyChooseUs;