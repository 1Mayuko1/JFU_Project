import React from 'react';
import {trimTextToLength} from "../constants/constants";

const VerticalNewsCard = ({title, content, date, mainImage}) => {

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    return (
        <div className="flex flex-col justify-between border-2 border-[#616161] cursor-pointer max-w-sm bg-gray-200 rounded-lg mx-10 my-10 max-h-[700px]" >
            <div>
                <div>
                    <img className="rounded-t-md h-[300px] w-full object-cover object-top" src={mainImage} alt="image"/>
                </div>
                <div className="p-5">
                    <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700">
                        {content === "" ? trimTextToLength(title, 200) : trimTextToLength(title, 60)}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins">
                        {trimTextToLength(content, 150)}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="group cursor-pointer flex-1 min-w-[200px] bg-gray-400 bg-opacity-60 rounded-lg border mb-5">
                    <div className="flex-1 flex justify-center items-center flex-row m-3">
                        <button type="button" className="font-poppins text-sm font-medium text-gray-700 outline-none items-center text-gray-700 font-semibold">
                            Перейти
                        </button>
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins">
                    {formatDate(date)}
                </p>
            </div>
        </div>
    );
};

export default VerticalNewsCard;
