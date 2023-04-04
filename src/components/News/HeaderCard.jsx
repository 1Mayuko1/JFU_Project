import React from 'react';
import {trimTextToLength} from "../../constants/constants";
import {Link} from "react-router-dom";

const HeaderCard = ({data}) => {

    const trimTextToLength = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            const trimmedText = text.substring(0, maxLength);
            const lastSpaceIndex = trimmedText.lastIndexOf(" ");
            return trimmedText.substring(0, lastSpaceIndex) + "...";
        }
    }

    return (
        <div className="w-[95%] md:max-w-[400px] min-h-[100px] max-h-[100px] flex justify-center items-center my-10 mx-auto">
            <div className="">
                <div className="flex flex-row card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                    <div className="w-[50%] md:w-[40%] min-h-[170px] max-h-[130px]">
                        <img src={data.mainImage} alt="image" className="rounded-l-lg w-full h-full object-cover" />
                    </div>
                    <div className="m-3 flex flex-col justify-between w-full">
                        <h2 className="text-lg mb-2">
                            Сегодня:
                            <span className="text-sm text-gray-50 font-mono bg-mainBlue inline rounded-full px-2 align-top float-right">{data.mainTag}</span>
                        </h2>
                        <p className="font-normal text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                            {trimTextToLength(data.content, 100)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;
