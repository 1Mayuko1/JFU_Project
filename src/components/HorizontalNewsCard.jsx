import React, {useState} from 'react';
import {arrowUp, chevronDown, chevronRight} from "../assets";
import styles from "../style";

const HorizontalNewsCard = ({content, title, date, mainImage, paragraphs, details}) => {

    const [detailsVisible, setDetailsVisible] = useState(false)

    const checkDetailsVisible = () => {
        setDetailsVisible(!detailsVisible)
    }

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

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
        <div className="flex flex-col w-full justify-center items-center">
            <div className={`${detailsVisible ? "my-0 rounded-t-lg" : "my-5 rounded-lg"} cursor-pointer xl:min-w-[70%] lg:min-w-[80%] w-[80%] sm:min-w-[80%] min-w-[70%] xs:h-full md:h-auto flex flex-col items-center border sm:flex-row md:max-w-xl bg-gray-200 delay-100 duration-500`}>
                <div className={`h-full md:w-[50%] ultraSmall:w-full`}>
                    <img className="object-cover object-top w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={mainImage} alt="image" />
                </div>
                <div className="flex flex-col w-full md:h-full md:justify-between">
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <p className="font-semibold font-normal lg:text-left text-center text-[30px] leading-[40px] text-gray-700 my-2">
                            {trimTextToLength(title, 100)}
                        </p>
                        <p className="font-poppins font-normal text-[22px] leading-[28px] text-gray-700 my-2">
                            {trimTextToLength(content, 700)}
                        </p>
                        <p className="font-poppins font-normal text-[22px] leading-[28px] text-gray-700 my-2">
                            {trimTextToLength(details, 700)}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center mb-3">
                        <div className="flex flex-row md:pl-5 flex justify-center items-center" onClick={checkDetailsVisible}>
                            <p className="font-poppins font-normal text-[25px] text-gray-700">
                                Details
                            </p>
                            <img src={detailsVisible ? chevronDown : chevronRight} alt="arrowUp" className="w-[15px] h-[15px] flex justify-center items-center ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 delay-300 duration-300"/>
                        </div>
                        <div className="md:pr-10">
                            <p className="font-poppins font-normal text-[20px] text-gray-700">
                                {formatDate(date)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${detailsVisible ? '' : 'hidden'} flex flex-col xl:min-w-[70%] lg:min-w-[80%] cursor-pointer xl:min-w-[70%] lg:min-w-[80%] w-[80%] sm:min-w-[80%] min-w-[70%] xs:h-full md:h-auto items-center border md:max-w-xl bg-gray-200 mb-5 rounded-b-lg delay-100 duration-500`}>
                {paragraphs.map((item, index) => {
                    return (
                        <p key={new Date() + `${index}`} className={`px-5 py-6 font-poppins font-normal text-[25px] text-gray-700`}>
                            {item}
                        </p>
                    )
                })}
            </div>
        </div>
    );
};

export default HorizontalNewsCard;
