import React from "react";

const OneCategory = ({image}) => {
    // const [activeModal, setActiveModal] = useState(false)

    return(
        <div className={`relative w-full h-full flex overflow-hidden category`}>
            <div className="w-full h-full flex">
                <img src={process.env.PUBLIC_URL + image} alt="imageAbout1" className="w-full h-full object-cover object-center rounded-lg"/>
            </div>
            <div className="absolute w-full h-full flex flex-col justify-center gap-4 modal-category bg-black bg-opacity-50">
                <div className="w-full flex justify-center">
                    <button className="bg-white px-3 py-2 text-primary-color rounded-md">Save 30%</button>
                </div>
                <div className="w-full flex justify-start">
                    <button className="bg-primary-color px-3 py-2 text-white rounded-md">Fast Food Dish</button>
                </div>
            </div>
        </div>
    )
}

export default OneCategory;