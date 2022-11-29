import React from "react";
import AboutUs from "./aboutUs";
import FoodCategory from "./foodCategory";
import Header from "./header";

const IndexHome = () => {

    return(
        <div className="flex flex-col justify-center items-center w-full text-white">
            {/* Header */}
            <Header />

            {/* About us */}
            <AboutUs />

            {/* Food category */}
            <FoodCategory />
        </div>
    )
}

export default IndexHome;