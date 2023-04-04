import React, {useEffect, useRef, useState} from 'react';
import {newsFromWebsite, worldPics} from "../constants/constants";
import CarouselComponent from "./CarouselComponent";
import HorizontalNewsCard from "./HorizontalNewsCard";
import GreyButton from "./GreyButton";
import CreatorInfoCard from "./CreatorInfoCard";
import SideInfoBottomVersCards from "./SideInfoBottomVersCards";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";
import VerticalNewsCard from "./VerticalNewsCard";

const Hero = () => {
    const [load, setLoad] = useState(false)
    const newsDataState = newsFromWebsite
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsDataState.slice(indexOfFirstPost, indexOfLastPost);

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

    return (
        <>
            <section className={`bg-gray-50 relative`}>
                <div>
                    <Loader load={load}/>
                </div>

                <div id='header' className="relative h-screen">
                    <div className="absolute z-[0] w-full h-full inset-0 object-cover opacity-60">
                        <CarouselComponent />
                    </div>
                    <div className="flex relative w-full sm:pt-[25%] md:pt-[13%] pt-[30%]">
                        <div className="flex flex-col justify-between items-center w-full relative z-[1]">
                            <h1 className="font-poppins font-semibold text-[52px] md:text-[60px] ultraSmall:text-[38px] max-w-[90%] text-gray-700 leading-[70px] md:leading-[100px] leading-[75px] text-center">
                                Jewish Kyiv
                            </h1>
                            <h1 className="font-poppins font-semibold text-[52px] md:text-[60px] ultraSmall:text-[38px] max-w-[90%] text-gray-700 leading-[70px] md:leading-[100px] leading-[75px] text-center">
                                Киев еврейский
                            </h1>
                            <p className="font-poppins font-semibold text-gray-700 ss:max-w-[500px] max-w-[300px] mt-5 text-center ultraSmall:text-[22px] md:text-[28px]">
                                Информационный портал Еврейского фонда и форума в Украине
                            </p>
                        </div>
                    </div>
                    <div className="flex relative w-full justify-center mt-20 animate-bounce">
                        <div className="cursor-pointer rounded-full w-[40px] h-[40px]" onClick={executeTopScroll}>
                            <svg className="w-[40px] h-[40px] mt-1.5" width="800px" height="800px" viewBox="0 0 24 24" fill="#4e4e4e" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#4e4e4e"/>
                            </svg>
                        </div>
                    </div>
                </div>

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
                                { newsDataState ?
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
                        { newsDataState ?
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
                            pageCount={Math.ceil(newsDataState.length / postsPerPage)}
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

                    <div className="w-full">

                        <div className="w-[100%]">
                            <SideInfoBottomVersCards />
                        </div>

                        <div className="flex justify-center items-center w-full mt-20">
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

                        <div className="">
                            <CreatorInfoCard />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
