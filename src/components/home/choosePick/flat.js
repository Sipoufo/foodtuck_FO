import React from "react";

const Flat = () => {
    return(
        <div className='w-full flex h-28'>
            <div className='w-full flex flex-row gap-2'>
                {/* Picture */}
                <div className='w-28 flex overflow-hidden rounded-md'>
                    <img src={process.env.PUBLIC_URL + "/images/image14.png"} alt="bgTitle" className="w-full h-full object-cover" />
                </div>
                {/* Infos */}
                <div className='grflex flex-col gap-2'>
                    {/* Name */}
                    <h1 className="font-semibold">
                        Lettuce Leaf
                    </h1>
                    {/* Shot description */}
                    <p>
                        Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    {/* Price */}
                    <p className="font-semibold text-primary-color">12.5$</p>
                </div>
            </div>
        </div>
    )
};

export default Flat;