import React from "react";
import AboutUs from "./aboutUs";
import ChoosePick from "./choosePick";
import Clients from "./clients";
import FoodCategory from "./foodCategory";
import Header from "./header";
import WhyChooseUs from "./whyChooseUs";

const IndexHome = () => {

    return(
        <div className="flex flex-col justify-center items-center w-full text-white">
            {/* Header */}
            <Header />

            {/* About us */}
            <AboutUs />

            {/* Food category */}
            <FoodCategory />

            {/* Potential Choose */}
            <WhyChooseUs />

            {/* Clients part */}
            <Clients />

            {/* Choose and Pick */}
            <ChoosePick />
        </div>
    )
}

export default IndexHome;