import React from "react";
import OneCategory from "./oneCategory";

const FoodCategory = () => {

    return(
        <div className="flex w-full justify-center text-white bg-black py-10">
            <div className="flex flex-col w-full max-w-screen-xl gap-4">
                <p className="w-full text-center text-3xl text-primary-color font-great-vibes">
                    Food Category
                </p>
                <p className="w-full text-center text-4xl font-extrabold">
                    <span className="text-primary-color">Ch</span>oose Food Item
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-60">
                    <OneCategory image={"/images/image6.png"} />
                    <OneCategory image={"/images/image7.png"} />
                    <OneCategory image={"/images/image9.png"} />
                    <OneCategory image={"/images/image10.png"} />
                </div>
            </div>
        </div>
    )
}

export default FoodCategory;