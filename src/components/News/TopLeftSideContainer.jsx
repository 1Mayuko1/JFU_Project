import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {newsFromWebsite, trimTextToLength, worldPics} from "../../constants/constants";
import GreyButton from "../GreyButton";
import Loader from "../Loader";
import HorizontalNewsCard from "../HorizontalNewsCard";
import SideInfoCards from "../SideInfoCards";

const TopLeftSideContainer = ({data}) => {
    const [pageTabNumber, setPageTabNumber] = useState(1)
    const [load, setLoad] = useState(false)

    const trimArrayByCount = (data) => {
        const numOfTrim = 3
        const last = data.slice(-numOfTrim - 1)
        const first = data.slice(0, numOfTrim)
        return [...first, ...last]
    }

    const top = useRef(null)
    const executeTopScroll = () => {
        setLoad(true)
        setTimeout(() => {
            top.current.scrollIntoView()
            setTimeout(() => setLoad(false), 2000)
        }, 500)
    }

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    function arrayForPageTabs(array) {
        const numberOfVisibleElements = 3
        const result = [];
        for (let i = 0; i < array.length; i += numberOfVisibleElements) {
            result.push(array.slice(i, i + numberOfVisibleElements));
        }
        return result;
    }

    const trimArrayByPageNumber = () => {
        return arrayForPageTabs(data)[pageTabNumber - 1]
    }

    const showNextTabOfNews = () => {
        if (arrayForPageTabs(data).length !== pageTabNumber) {
            setPageTabNumber(prevState => prevState + 1)
            executeTopScroll()
        }
    }

    const showPrevTabOfNews = () => {
        if (pageTabNumber !== 1) {
            setPageTabNumber(prevState => prevState - 1)
            executeTopScroll()
        }
    }

    return (
        <section>
            <div ref={top} className="w-full flex">
                <div>
                    <Loader load={load}/>
                </div>
                <div className="w-full flex flex-col justify-center items-center">

                    <div className="w-full flex justify-center items-center">
                        <div className="flex xl:flex-row flex-col xl:w-[90%] w-[80%]">
                            <div className="flex flex-wrap justify-center w-full h-full">
                                {
                                    trimArrayByPageNumber().slice(0, 3).map((card, index) => {
                                        return (
                                            <HorizontalNewsCard key={new Date() + `${index}`} {...card} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex items-center justify-center mt-[20%]">
                            <div className="flex items-center">
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                     aria-label="Pagination">
                                    <div onClick={showPrevTabOfNews} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        {
                                            newsFromWebsite.length > 6 ?
                                                newsFromWebsite.map((_, index) => {
                                                    if (index === 6) {return (<span key={new Date() + `${index}`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>)}
                                                    else if (index > 6) {
                                                        return null
                                                    } else {
                                                        return (
                                                            <button key={new Date() + `${index}`} onClick={() => {setPageTabNumber(index + 1); executeTopScroll()}} className={`${index + 1 === pageTabNumber ? "active [&.active]:bg-gray-300" : ""} cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0`}>
                                                                <p>{index + 1}</p>
                                                            </button>
                                                        )
                                                    }
                                                })
                                                :
                                                newsFromWebsite.map((_, index) => {
                                                    return (
                                                        <button key={new Date() + `${index}`} onClick={() => {setPageTabNumber(index + 1); executeTopScroll()}} className={`${index + 1 === pageTabNumber ? "active [&.active]:bg-gray-300" : ""} cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0`}>
                                                            <p>{index + 1}</p>
                                                        </button>
                                                    )
                                                })
                                        }
                                    </div>
                                    <span className="sr-only">Next</span>
                                    <div onClick={showNextTabOfNews} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TopLeftSideContainer;
