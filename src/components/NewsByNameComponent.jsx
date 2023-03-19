import React, {useEffect, useState} from 'react';
import {newsFromWebsite, trimTextToLength} from "../constants/constants";
import VerticalNewsCard from "./VerticalNewsCard";
import TopLeftSideContainer from "./News/TopLeftSideContainer";
import ThreeCardsComponent from "./News/ThreeCardsComponent";
import MiniNewsCard from "./News/MiniNewsCard";
import HeaderCard from "./News/HeaderCard";
import {Link} from "react-router-dom";
import GreyButton from "./GreyButton";

const NewsByNameComponent = ({text}) => {

    const getUniqueTags = (arr) => {
        const tags = [];
        arr.forEach((obj) => {
            if (obj.mainTag && !tags.includes(obj.mainTag)) {
                tags.push(obj.mainTag);
            }
            obj.tags.forEach((tag) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });
        return tags;
    }

    return (
        <section>
            <div>
                <div>
                    <div id="header">
                        <div className="flex flex-col justify-between items-center w-full bg-gray-50">
                            <h1 className="pt-5 font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] max-w-[90%] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                                {text}
                            </h1>

                            <div className="flex w-full flex-row justify-between pb-2 px-10 border-b-2 border-gray-300">
                                <div>
                                    <p className="font-poppins text-gray-700 ss:max-w-[500px] max-w-[300px] mt-5 text-center text-[18px]">
                                        {(new Date()).toDateString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-poppins text-gray-700 ss:max-w-[500px] max-w-[300px] mt-5 text-center text-[18px]">
                                        Новости сегодня
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap w-full justify-center px-10 border-b-2 border-[#616161]">
                                {getUniqueTags(newsFromWebsite).map((tag, index) => {
                                    return (
                                        <div key={`${new Date() + index}`} className="w-auto h-[50px] flex-shrink-0 px-5">
                                            <p className="py-3 cursor-pointer hover:text-black text-center text-[18px] font-normal text-gray-600 ss:max-w-[500px] max-w-[300px]">
                                                {tag}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex flex-wrap w-ful justify-center items-center py-5">
                                <HeaderCard />
                                <HeaderCard />
                                <HeaderCard />
                                <HeaderCard />
                            </div>

                            <div className="w-full border-b-2 border-t-2 border-t-gray-700 border-b-gray-400 py-[1px]" />

                            <div className="w-full flex flex-row pt-5">
                                <div id="left_side" className="w-[60%]">
                                    <div>
                                        <TopLeftSideContainer data={newsFromWebsite} />
                                    </div>
                                    <div className="w-full">
                                        <ThreeCardsComponent data={newsFromWebsite} />
                                    </div>
                                </div>

                                <div className="w-[40%] px-10">
                                    <div className="w-full flex flex-row justify-between">
                                        <div className="border-l-2 border-gray-500">
                                            <div className="flex flex-wrap">
                                                {
                                                    newsFromWebsite.slice(0, 8).map((card, index) => {
                                                        return (
                                                            <div className="flex flex-col items-center max-w-[50%]">
                                                                <MiniNewsCard data={card}/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center mt-20 mb-20">
                                <div className="w-[80%] columns-1 ss:columns-1 md:columns-2 lg:columns-3">
                                    {newsFromWebsite.slice(0, 40).map((card, index) => <VerticalNewsCard elIndex={index} key={new Date() + `${index}`} {...card} />)}
                                </div>
                            </div>

                            <div className="w-full flex flex-row justify-evenly justify-center mt-20 mb-40">
                                <Link to={`/`}>
                                    <GreyButton title={'Домой'}/>
                                </Link>
                                <Link to={`/`}>
                                    <GreyButton title={'Назад'}/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsByNameComponent;
