import React, {useEffect, useState} from 'react';
import {arrowUp, chevronDown, chevronRight} from "../assets";
import {Link} from "react-router-dom";
import GreyButton from "./GreyButton";

const HorizontalNewsCard = ({content, title, date, mainImage, paragraphs, details, tags, index, id}) => {

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
        <div className="flex flex-col w-full items-center justify-center">
            <div className={`${detailsVisible ? "my-0 rounded-t-lg" : "rounded-lg mb-5"} w-[95%] cursor-pointer flex flex-col lg:flex-row items-center bg-gray-100 shadow-xl delay-100 duration-500`}>
                <div className={`h-full lg:w-[50%] ultraSmall:w-full`}>
                    <img className={`object-cover object-top w-full h-full rounded-l`} src={mainImage} alt="image" />
                </div>
                <div className="flex flex-col w-full md:h-full md:justify-between">
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <Link to={`/home/${id}`}>
                            <p className="cursor-pointer font-semibold font-normal lg:text-left text-center text-[20px] leading-[30px] ss:text-[30px] ss:leading-[40px] text-gray-700 my-2">
                                {trimTextToLength(title, 100)}
                            </p>
                        </Link>
                        <p className="font-poppins font-normal text-[18px] leading-[24px] ss:text-[22px] ss:leading-[28px] text-gray-700 my-2">
                            {trimTextToLength(content, 300)}
                        </p>
                    </div>
                    <div className={`flex flex-col lg:flex-row md:justify-between justify-center items-center mb-3`}>
                        <div className={`${paragraphs.length === 0 ? "hidden" : 'flex'} lg:mb-0 mb-5 lg:ml-0 ml-5 flex flex-row lg:pl-5 flex justify-center items-center`} onClick={checkDetailsVisible}>
                            <p className="font-poppins font-normal text-[18px] ss:text-[22px] text-gray-700">
                                {detailsVisible ? "Скрыть" : "Подробнее"}
                            </p>
                            <img src={detailsVisible ? chevronDown : chevronRight} alt="arrowUp" className="w-[15px] h-[15px] flex justify-center items-center ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 delay-300 duration-300"/>
                        </div>
                        <div className={`${tags.length !== 0 && tags.includes("newspaper") ? "ml-5" : 'hidden'} lg:pr-10`}>
                            <div className="group cursor-pointer flex-1 w-[30%]] mx-10 lg:mb-0 mb-5">
                                <GreyButton title={`Газета "Киев еврейский"`}/>
                            </div>
                        </div>
                        <div className={`${paragraphs ? "ml-5" : 'ml-0'} lg:pr-10`}>
                            <p className="font-poppins font-normal text-[18px] ss:text-[20px] text-gray-700">
                                {formatDate(date)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${detailsVisible ? '-mt-[1px]' : 'hidden'} w-[95%] mb-5 rounded-b-lg flex flex-col cursor-pointer items-center bg-gray-100 shadow-xl delay-100 duration-500`}>
                {paragraphs.map((item, index) => {
                    return (
                        <p key={new Date() + `${index}`} className={`px-5 py-6 font-poppins font-normal text-[18px] leading-[24px] ss:text-[22px] ss:leading-[28px] text-gray-700`}>
                            {item}
                        </p>
                    )
                })}
                <Link to={`/home/${id}`}>
                    <div className={`group flex flex-col md:flex-row md:justify-between justify-center items-center mb-5 mt-10`}>
                        <div className={`flex flex-row md:pl-5 flex justify-center items-center`}>
                            <p className="font-poppins font-normal ultraSmall:text-[12px] xs:text-[16px] sm:text-[25px] text-gray-700">
                                Перейти на страницу этой новости
                            </p>
                            <img src={arrowUp} alt="arrowUp" className="xs:w-[20px] xs:h-[16px] w-[16px] h-[20px] flex justify-center items-center ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5"/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HorizontalNewsCard;
