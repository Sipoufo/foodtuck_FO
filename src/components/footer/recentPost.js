import React from "react";

const RecentPost = ({image, name, date}) => {
    return(
        <div className="flex flex-row w-full min-h-12 gap-1">
            <div className="w-12 h-full">
                <img src={process.env.PUBLIC_URL + image} alt="recent post" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-base">{name}</p>
                <p className="text-xs text-gray-700">{date}</p>
            </div>
        </div>
    )
}

export default RecentPost;