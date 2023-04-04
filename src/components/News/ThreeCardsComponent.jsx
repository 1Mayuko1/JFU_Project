import React from 'react';
import {Link} from "react-router-dom";
import MiniNewsCard from "./MiniNewsCard";
import {trimTextToLength} from "../../constants/constants";

const ThreeCardsComponent = ({data}) => {
    return (
        <div className="w-full flex flex-row justify-between items-center my-2" style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {
                data.slice(0, 6).map((card, index) => {
                    return (
                        <div className="max-w-[30%]" key={`${new Date() + index}`}>
                            <Link to={`/`}>
                                <div className="w-full">
                                    <div className="flex flex-col">
                                        <div className="px-4">
                                            <p className="text-[14px] font-medium pb-2">{card.title}</p>
                                            <p className="text-[12px] text-gray-700">{!card.content ? "" : trimTextToLength(card.content, 200)}</p>
                                            <p className="text-[12px] text-gray-700 pt-5">{(new Date()).toDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ThreeCardsComponent;
