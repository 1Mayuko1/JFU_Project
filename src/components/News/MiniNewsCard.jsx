import React from 'react';
import {trimTextToLength} from "../../constants/constants";
import {Link} from "react-router-dom";

const MiniNewsCard = ({data}) => {
    return (
        <div className="w-full cursor-pointer">
            <Link to={`/home/${data.id}`}>
                <div className="flex flex-col">
                    <div className="px-4 w-[90%]">
                        <p className="text-[14px] font-medium pb-2">{data.title}</p>
                        <p className="text-[12px] text-gray-700">{!data.content ? "" : trimTextToLength(data.content, 200)}</p>
                        <p className="text-[12px] text-gray-700 pt-2">{(new Date()).toDateString()}</p>
                        <div className="w-full border-b-2 border-gray-300 pt-5 mb-5"/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MiniNewsCard;
