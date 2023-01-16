import React from "react";

const OneChef = ({image, name, title}) => {
    // const [activeModal, setActiveModal] = useState(false)

    return(
        <div className={`relative w-full h-full flex overflow-hidden category`}>
            <div className="w-full h-full flex">
                <img src={process.env.PUBLIC_URL + image} alt="chef" className="w-full h-full object-cover object-center rounded-lg"/>
            </div>
            <div className="absolute w-full h-full flex flex-col justify-end items-start gap-2">
                <div className="flex flex-col gap-1 pl-4 py-2 w-7/12 bg-white">
                    <h1 className="font-semibold text-black">{name}</h1>
                    <h1 className="text-gray-600">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default OneChef;