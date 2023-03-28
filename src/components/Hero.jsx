import React, {useEffect, useRef, useState} from 'react';
import {jewishStarIcon} from "../assets";
import styles from "../style";
import {bottomLinks, contacts, newsFromWebsite, worldPics} from "../constants/constants";
import CarouselComponent from "./CarouselComponent";
import HorizontalNewsCard from "./HorizontalNewsCard";
import GreyButton from "./GreyButton";
import SideInfoCards from "./SideInfoCards";
import VerticalNewsCard from "./VerticalNewsCard";
import CreatorInfoCard from "./CreatorInfoCard";
import SideInfoBottomVersCards from "./SideInfoBottomVersCards";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";

const Hero = () => {
    const [pageTabNumber, setPageTabNumber] = useState(1)
    const [load, setLoad] = useState(false)

    const newsDataState = newsFromWebsite
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

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
        setLoad(true); // turn on
        setTimeout(() => {
            top.current.scrollIntoView(); // perform scroll
            setTimeout(() => setLoad(false), 2000); // turn off after scroll
        }, 500); // delay time for loader to display
    }

    return (
        <>
            <section className={`bg-gray-200 bg-opacity-50 relative`}>
                <div>
                    <Loader load={load}/>
                </div>

                <div id='header' className="ultraSmall:h-[800px] ss:h-[750px] md:h-[800px] xl:h-[900px] xxl:x-[1000px] semiLg:h-[800px]">
                    <div className="absolute z-[0] w-full inset-0 object-cover opacity-60">
                        <CarouselComponent />
                    </div>
                    <div className="flex relative z-[1] w-full pt-[16%]">
                        <div className="flex flex-col justify-between items-center w-full relative z-[1]">
                            <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] max-w-[90%] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                                Інформаційний портал
                            </h1>
                            <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] max-w-[90%] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                                Jewish Kyiv
                            </h1>
                            <p className="font-poppins font-semibold text-gray-700 ss:max-w-[500px] max-w-[300px] mt-5 text-center text-[28px]">
                                Інформаційний портал Єврейського фонду в Україні
                            </p>

                            <div className="cursor-pointer mt-20 animate-bounce" onClick={executeTopScroll}>
                                <div className="rounded-full w-[40px] h-[40px]">
                                    <svg className="w-[40px] h-[40px] mt-1.5" width="800px" height="800px" viewBox="0 0 24 24" fill="#4e4e4e" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#4e4e4e"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-[5] mt-[5%]">
                    <div ref={top} className="">
                        <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                            Главная
                        </h1>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <div className="flex xl:flex-row flex-col pt-[5%] xl:w-[90%] w-[80%]">
                            <div className="flex flex-wrap justify-center w-full h-full">
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
                            <div className="xl:w-[20%] w-[100%]">
                                <SideInfoCards />
                            </div>
                        </div>
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

                        <div className="mb-20 w-[90%] m-auto mt-[5%]">
                            <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                                Последние новости
                            </h1>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[80%] columns-1 ss:columns-1 md:columns-2 lg:columns-3">
                                {newsFromWebsite.slice(0, 40).map((card, index) => <VerticalNewsCard elIndex={index} key={new Date() + `${index}`} {...card} />)}
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full mt-20">
                            <section className="bg-gray-100 flex flex-row flex-wrap justify-between items-center">

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

                        <div id="preFooter" className="flex md:flex-row justify-evenly ultraSmall:flex-col mt-20 bg-gray-200 pt-10">
                            <div className="flex flex-col items-center p-10 sm:justify-center sm:pt-0">
                                <div>
                                    <a href="/">
                                        <h3 className="md:text-4xl ultraSmall:text-2xl font-bold text-gray-700">
                                            Свяжитесь с нами
                                        </h3>
                                    </a>
                                </div>
                                <div className="sm:w-full xs:w-[80%] ultraSmall:w-full w-full px-6 py-4 mt-6 overflow-hidden bg-gray-200 bg-opacity-50 shadow-md sm:max-w-md sm:rounded-lg">
                                    <form>
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 undefined">
                                                Имя
                                            </label>
                                            <div className="flex flex-col items-start">
                                                <input type="text" name="name" className="px-2 py-1 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                                                Ваш e-mail
                                            </label>
                                            <div className="flex flex-col items-start">
                                                <input type="email" name="email" className="px-2 py-1 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 undefined">
                                                Номер телефона
                                            </label>
                                            <div className="flex flex-col items-start">
                                                <input name="phone" className="px-2 py-1 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 undefined">
                                                Сообщение
                                            </label>
                                            <div className="flex flex-col items-start">
                                                <textarea name="password_confirmation" className="h-[100px] px-2 py-1 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md shadow-sm outline-none"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end mt-4">
                                            <button type="submit" className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md active:bg-gray-900 false">
                                                Отправить
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-10 sm:pt-0">
                                <div>
                                    <h3 className="md:text-4xl ultraSmall:text-3xl font-bold text-gray-700">
                                        Наши контакты
                                    </h3>
                                </div>
                                {
                                    contacts.map((item, index) => {
                                        return (
                                            <div key={new Date() + `${index}`} className="group cursor-pointer flex flex-row justify-center items-center pt-5 pb-3">
                                                <img src={item.icon} alt="icon" className="w-[18px] h-[18px] cursor-pointer mr-2"/>
                                                <p className={`${styles.paragraph} group-hover:text-black`}>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="flex flex-col items-center p-10 sm:pt-0">
                                <div>
                                    <h3 className="md:text-4xl ultraSmall:text-3xl font-bold text-gray-700">
                                        Меню сайта
                                    </h3>
                                </div>
                                {
                                    bottomLinks.map((item,index) => {
                                        return (
                                            <div key={new Date() + `${index}`} className="group cursor-pointer flex flex-row justify-center items-center p-3 ">
                                                <img src={jewishStarIcon} alt="icon" className="w-[18px] h-[18px] cursor-pointer mr-2"/>
                                                <p className="font-poppins font-normal text-gray-700 text-[18px] group-hover:font-semibold">
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
