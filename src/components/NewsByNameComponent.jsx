import React, {useEffect, useRef, useState} from 'react';
import {newsFromWebsite, worldPics} from "../constants/constants";
import HeaderCard from "./News/HeaderCard";
import Loader from "./Loader";
import VerticalNewsCard from "./VerticalNewsCard";
import HorizontalNewsCard from "./HorizontalNewsCard";
import ReactPaginate from "react-paginate";
import GreyButton from "./GreyButton";

const NewsByNameComponent = ({text, newsDataInfo}) => {
    const [load, setLoad] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsDataInfo.slice(indexOfFirstPost, indexOfLastPost);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, []);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const pageRangeDisplayed = windowWidth >= 768 ? 3 : 1;
    const marginPagesDisplayed = windowWidth >= 768 ? 3 : 1;

    const top = useRef(null)
    const executeTopScroll = () => {
        setLoad(true);
        setTimeout(() => {
            top.current.scrollIntoView();
            setTimeout(() => setLoad(false), 2000);
        }, 500);
    }

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
                    <Loader load={load}/>
                </div>
                <div id="header">
                    <div className="flex flex-col justify-between items-center w-full bg-gray-50">
                        <h1 className="pt-5 font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] max-w-[90%] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                            {text}
                        </h1>

                        <div className="flex w-full flex-col xs:flex-row xs:justify-between pb-2 px-10 border-b-2 border-gray-300">
                            <div>
                                <p className="font-poppins text-gray-700 xs:max-w-[300px] mt-5 text-center text-[18px]">
                                    {(new Date()).toDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="font-poppins text-gray-700 xs:max-w-[300px] mt-5 text-center text-[18px]">
                                    Новости сегодня
                                </p>
                            </div>
                        </div>

                        <div className="hidden sm:flex flex-wrap w-full justify-center px-10 border-b-2 border-[#616161] ">
                            {getUniqueTags(newsDataInfo).slice(0, 12).map((tag, index) => {
                                return (
                                    <div key={`${new Date() + index}`} className="w-auto h-[50px] flex-shrink-0 px-5">
                                        <p className="transform hover:-translate-y-1 transition-all duration-200 py-3 cursor-pointer hover:text-black text-center text-[18px] font-normal text-gray-600 ss:max-w-[500px] max-w-[300px]">
                                            {tag}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        <div ref={top}/>

                        <div className="flex flex-col semiMd:flex-row justify-between w-full justify-center items-center py-5">
                            <div className="w-full flex flex-col xl:flex-row justify-between">
                                {newsDataInfo.slice(0, 2).map((card, index) => <HeaderCard key={new Date() + `${index}`} mapKey={index} data={card}/>)}
                            </div>
                            <div className="w-full flex flex-col xl:flex-row justify-between">
                                {newsDataInfo.slice(2, 4).map((card, index) => <HeaderCard key={new Date() + `${index}`} mapKey={index} data={card}/>)}
                            </div>
                        </div>

                        <div className="w-full border-b-2 border-t-2 border-t-gray-700 border-b-gray-400 py-[1px]"/>


                        <div className="relative z-[5] mt-[5%]">
                            <div ref={top} />
                            <div className="">
                                <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                                    Главная
                                </h1>
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <div className="flex xl:flex-row flex-col pt-[5%] xl:w-[80%] w-[95%]">
                                    <div className="hidden lg:flex flex-wrap justify-center w-full h-full">
                                        { newsDataInfo ?
                                            currentPosts.map((card, index) => {
                                                return (
                                                    <HorizontalNewsCard imgSource={worldPics} index={index} key={new Date() + `${index}`} {...card} />
                                                )
                                            })
                                            :
                                            <div>
                                                <div className="">Loading...</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="lg:hidden w-full justify-center flex flex-wrap">
                                { newsDataInfo ?
                                    currentPosts.map((card, index) => <VerticalNewsCard elIndex={index} key={new Date() + `${index}`} {...card} />)
                                    :
                                    <div>
                                        <div className="">Loading...</div>
                                    </div>
                                }
                            </div>

                            <div className="w-full flex items-center justify-center mt-[5%]">
                                <ReactPaginate
                                    onPageChange={paginate}
                                    onClick={executeTopScroll}
                                    pageCount={Math.ceil(newsDataInfo.length / postsPerPage)}
                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    pageRangeDisplayed={pageRangeDisplayed}
                                    marginPagesDisplayed={marginPagesDisplayed}
                                    renderOnZeroPageCount={null}
                                    containerClassName={'pagination'}
                                    pageLinkClassName={'page-number'}
                                    previousLinkClassName={'page-number'}
                                    nextLinkClassName={'page-number'}
                                    activeLinkClassName={'active'}
                                />
                            </div>

                            <div className="flex justify-center items-center w-full py-[5%]">
                                <section className="bg-gray-50 flex flex-row flex-wrap justify-between items-center">

                                    <div className="w-full flex flex-wrap justify-center">
                                        <div className="flex ss:flex-row flex-col">

                                            <div className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5" onClick={executeTopScroll}>
                                                <GreyButton title={'На верх'}/>
                                            </div>

                                            <div onClick={executeTopScroll} className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5">
                                                <GreyButton title={'К новостям'}/>
                                            </div>

                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsByNameComponent;
