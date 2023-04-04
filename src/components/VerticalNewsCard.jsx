import React from 'react';
import {Link} from "react-router-dom";
import {trimTextToLength} from "../constants/constants";

const VerticalNewsCard = ({title, mainTag, content, date, mainImage, id}) => {

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    return (
        <div className="flex flex-col w-[200px] max-h-[400px] min-h-[400px] break-inside relative w-[300px] bg-gray-50 shadow-xl object-cover cursor-pointer rounded-2xl m-auto mb-[30px]">
            <div className="flex w-full h-[200px] w-[90%] items-center justify-center mt-[20px]">
                <img className="shadow-xl h-full w-[85%] rounded-xl object-cover object-top" src={mainImage} alt="image"/>
            </div>
            <div className="h-[170px] px-5 flex flex-col justify-between">
                <div className="mt-5">
                    <Link to={`/home/${id}`}>
                        <h5 className="cursor-pointer mb-3 font-poppins text-gray-700 semiLg:text-[22px] xxl-text-[30px] text-[16px] font-semibold text-gray-700">
                            {trimTextToLength(title, 100)}
                        </h5>
                    </Link>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="mb-3 font-normal text-gray-700 semiLg:text-[18px] xxl-text-[26px] text-[14px] font-poppins">
                        {formatDate(date)}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 semiLg:text-[18px] xxl-text-[26px] text-[14px] font-poppins">
                        {mainTag}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerticalNewsCard;
