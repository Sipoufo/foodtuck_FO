import React from "react";
import OneChef from "./chefs/oneChef";

const Chefs = () => {
    return(
        <div className="flex w-full justify-center text-white bg-black py-10">
            <div className="flex flex-col w-full max-w-screen-xl gap-4 px-10">
                <p className="w-full text-center text-2xl md:text-3xl text-primary-color font-great-vibes">
                    Chefs
                </p>
                <p className="w-full text-center text-4xl font-extrabold">
                    <span className="text-primary-color">Me</span>et Our Chef
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 h-80">
                    <OneChef image={'/images/image21.png'} name={"D. Scoriesh"} title={"Assistant chef"} />
                    <OneChef image={'/images/image20.png'} name={"M. William"} title={"Advertising chef"} />
                    <OneChef image={'/images/image21.png'} name={"D. Scoriesh"} title={"Assistant chef"} />
                    <OneChef image={'/images/image20.png'} name={"M. William"} title={"Advertising chef"} />
                </div>
                <div className="w-full flex justify-center">
                    <button className="rounded-3xl border border-primary-color text-white px-6 py-3">See More</button>
                </div>
            </div>
        </div>
    )
};

export default Chefs;