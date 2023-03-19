import React from 'react';
import {Link} from "react-router-dom";
import {trimTextToLength} from "../../constants/constants";
import GreyButton from "../GreyButton";

const TopLeftSideContainer = ({data}) => {

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    const LeftCards = ({data}) => {
        return (
            <div className={`rounded-lg mb-5 w-full cursor-pointer flex flex-col lg:flex-row items-center shadow-md`}>
                <div className="flex flex-col w-full md:h-full md:justify-between">
                    <div className="flex flex-col justify-between px-4 leading-normal w-full">
                        <p className="pt-3 font-semibold font-normal lg:text-left text-center text-[16px] text-gray-700">
                            {trimTextToLength(data.title, 50)}
                        </p>
                        <p className="font-poppins font-normal text-[14px] text-gray-700">
                            {trimTextToLength(data.content, 200)}
                        </p>
                    </div>
                    <div className={`flex flex-col lg:flex-row md:justify-between justify-center items-center mb-3`}>
                        <div className={`${data.tags.length !== 0 && data.tags.includes("newspaper") ? "ml-5" : 'hidden'} lg:pr-10`}>
                            <div className="group cursor-pointer flex-1 w-[30%]] mx-10 lg:mb-0 mb-5">
                                <GreyButton title={`Газета "Киев еврейский"`}/>
                            </div>
                        </div>
                        <div className={`${data.paragraphs ? "ml-5" : 'ml-0'} lg:pr-10`}>
                            <p className="font-poppins font-normal text-[14px] text-gray-700 my-2">
                                {formatDate(data.date)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-row">
                    <div className="min-w-[60%] min-h-full flex flex-wrap justify-center items-center">
                        {
                            data.slice(1, 5).map((card, index) => {
                                return (
                                    <div className="w-[90%]" key={`${new Date() + index}`}>
                                        <Link to={`/home/${card.id}`}>
                                            <LeftCards data={card}/>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="min-w-[40%] flex flex-col justify-center items-center">
                        {
                            data.slice(1, 2).map((card, index) => {
                                return (
                                    <div className="" key={`${new Date() + index}`}>
                                        <Link to={`/home/${card.id}`}>
                                            <div className="flex justify-center items-center">
                                                <img className="max-h-[10%] rounded-xl object-cover" src={card.mainImage} alt="placeholder" />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopLeftSideContainer;
