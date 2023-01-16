import React from "react";

const Clients = () => {
    return(
        <div className="relative flex w-full h-96 justify-center text-white bg-black py-10 text-lg font-semibold overflow-hidden">
            <img src={process.env.PUBLIC_URL + "/images/image17.png"} className="absolute w-full h-full object-none object-center" alt="clients" />
            <div className="absolute w-full h-full bg-black opacity-60"></div>
            <div className="absolute flex flex-row max-w-screen-xl w-full h-full justify-center items-center">
                <div className="flex flex-row w-full max-w-screen-xl gap-4 justify-between items-center overflow-auto">
                    <div className="flex flex-col gap-4 items-center w-72">
                        <img src={process.env.PUBLIC_URL + "/images/Group1.png"} className="h-24 w-16 object-contain" alt="pc"/>
                        <p>
                            Professional Chefs
                        </p>
                        <p>
                            420
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/Group2.png"} className="h-24 w-16 object-contain" alt="pc"/>
                        <p>
                            Items Of Food
                        </p>
                        <p>
                            320
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/Group3.png"} className="h-24 w-16 object-contain" alt="pc"/>
                        <p>
                            Years Of Experienced
                        </p>
                        <p>
                            30+
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/Group4.png"} className="h-24 w-16 object-contain" alt="pc"/>
                        <p>
                            Happy Customers
                        </p>
                        <p>
                            220
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Clients;