import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RecentPost from "./recentPost";

const IndexFooter = () => {
    return(
        <div className="flex flex-col items-center w-full bg-black text-white justify-center pt-4 bottom-0 text-xs">
            {/* footer */}
            <div className="mt-10 max-w-screen-xl flex flex-col w-full gap-10 px-5">
                {/* New letter */}
                <div className="w-full flex justify-center">
                    <div className="w-10/12 flex flex-col md:flex-row justify-between border-b-2 border-primary-color pb-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-xl font-bold text-center md:text-start"><e className="text-primary-color">St</e>ill You Need Our Support ?</p>
                            <p className="text-center md:text-start">
                                Don’t wait make a smart & logical quote here. Its pretty easy.
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 md:mt-0">
                            <form className="flex flex-row h-10 md:h-4/6 bg-primary-color rounded-md overflow-hidden">
                                <input type={"text"} className="bg-primary-color px-4 py-2 w-8/12" />
                                <button type={"submit"} className="bg-white rounded-md px-2 py-1 w-4/12 text-primary-color text-xs md:text-sm"> Subscribe Now </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
                    {/* About Us */}
                    <div className="w-full md:w-3/12 flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">About Us.</h1>
                        <p>
                            orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.
                        </p>
                        <div className="flex flex-row w-full gap-1">
                            <div className="w-16 h-16 p-4 bg-primary-color">
                                <FontAwesomeIcon icon={faClockRotateLeft} className="w-full h-full" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-base">Opening Houres</p>
                                <p className="text-xs">Mon - Sat(8.00 - 6.00)</p>
                                <p className="text-xs">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Useful links */}
                    <div className="w-full md:w-2/12 flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">Useful links</h1>
                        <ul className="w-full flex flex-col gap-2 items-center md:items-start">
                            <li>About</li>
                            <li>News</li>
                            <li>Patners</li>
                            <li>Teams</li>
                            <li>Menu</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="w-full md:w-2/12 flex flex-col gap-4">
                        <h1 className="font-semibold text-lg">Help ?</h1>
                        <ul className="w-full flex flex-col gap-2 items-center md:items-start">
                            <li>FaQ</li>
                            <li>Term & condition</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support policy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className="w-full md:w-2/12 flex flex-col gap-4">
                        <RecentPost image={"/images/image1.png"} name={"/images/image1.png"} date={"February 28,2022"} />
                        <RecentPost image={"/images/image1.png"} name={"/images/image1.png"} date={"February 28,2022"} />
                        <RecentPost image={"/images/image1.png"} name={"/images/image1.png"} date={"February 28,2022"} />
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col w-full gap-10 bg-gray-600 justify-center items-center">
                <div className="max-w-screen-xl flex flex-row w-full justify-between py-4">
                    <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex flex-row gap-2">
                        <div className="w-6 h-6 bg-white text-black flex justify-center items-center">
                            <FontAwesomeIcon icon={faFacebookF} className="text-sm " />
                        </div>
                        <div className="w-6 h-6 bg-white text-black flex justify-center items-center">
                            <FontAwesomeIcon icon={faTwitter} className="text-sm " />
                        </div>
                        <div className="w-6 h-6 bg-white text-black flex justify-center items-center">
                            <FontAwesomeIcon icon={faInstagram} className="text-sm " />
                        </div>
                        <div className="w-6 h-6 bg-white text-black flex justify-center items-center">
                            <FontAwesomeIcon icon={faYoutube} className="text-sm " />
                        </div>
                        <div className="w-6 h-6 bg-white text-black flex justify-center items-center">
                            <FontAwesomeIcon icon={faPinterest} className="text-sm " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexFooter;