import React, {useEffect, useState} from 'react';
import {arrowUp, chevronDown, chevronRight} from "../assets";
import {Link} from "react-router-dom";

const HorizontalNewsCard = ({content, title, date, mainImage, paragraphs, details, tags, index}) => {

    const [detailsVisible, setDetailsVisible] = useState(false)

    const checkDetailsVisible = () => {
        setDetailsVisible(!detailsVisible)
    }

    useEffect(() => {
        if(index === 0) {
            setDetailsVisible(true)
        }
    }, [])

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
        // <Link to={`news_details`} state={{content, title, date, mainImage, paragraphs, details}} className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center">
                <div className={`${detailsVisible ? "my-0 rounded-t-lg" : "my-5 rounded-lg"} cursor-pointer xl:min-w-[70%] lg:min-w-[80%] w-[80%] sm:min-w-[80%] min-w-[70%] xs:h-full md:h-auto flex flex-col items-center border md:flex-row md:max-w-xl bg-gray-200 delay-100 duration-500`}>
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
                        <div className={`flex flex-col lg:flex-row md:justify-between justify-center items-center mb-3`}>
                            <div className={`${paragraphs.length === 0 ? "hidden" : 'flex'} flex flex-row lg:pl-5 flex justify-center items-center`} onClick={checkDetailsVisible}>
                                <p className="font-poppins font-normal text-[22px] text-gray-700">
                                    Подробнee
                                </p>
                                <img src={detailsVisible ? chevronDown : chevronRight} alt="arrowUp" className="w-[15px] h-[15px] flex justify-center items-center ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 delay-300 duration-300"/>
                            </div>
                            <div className={`${tags.length !== 0 && tags.includes("newspaper") ? "ml-5" : 'hidden'} lg:pr-10`}>
                                <Link to={`/`}>
                                    <button type="button" className="outline-none flex flex-row text-gray-700 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm px-5 py-2.5 text-center items-center">
                                        Подробнее: Газета "Киев еврейский".
                                        <div className="w-[20px] h-[20px] flex justify-center items-center">
                                            <svg width="20" height="20" aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" fill="gray-200"/>
                                            </svg>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                            <div className={`${paragraphs ? "ml-5" : 'ml-0'} lg:pr-10`}>
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
                    <Link to={`news_details`}>
                        <div className={`group flex flex-col md:flex-row md:justify-between justify-center items-center mb-5 mt-10`}>
                            <div className={`flex flex-row md:pl-5 flex justify-center items-center`}>
                                <p className="font-poppins font-normal text-[25px] text-gray-700">
                                    Перейти на страницу этой новости
                                </p>
                                <img src={arrowUp} alt="arrowUp" className="w-[20px] h-[20px] flex justify-center items-center ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        // </Link>
    );
};

export default HorizontalNewsCard;
