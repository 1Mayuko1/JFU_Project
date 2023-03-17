import React, {useRef, useState} from 'react';
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

const Hero = () => {
    const [pageTabNumber, setPageTabNumber] = useState(1)

    const top = useRef(null)
    const executeTopScroll = () => top.current.scrollIntoView()

    const numbersArray = () => {
        let numOfElement = newsFromWebsite.length
        if (numOfElement % 5 !== 0) {
            numOfElement = Math.floor(numOfElement / 5) * 5;
        }
        return numOfElement / 5
    }

    const lengthOfNews = (length) => {
        let arrayFromNumber = Array.from({ length }, (_, index) => index + 1);
        if (arrayFromNumber.length < 6) {
            return arrayFromNumber
        } else {
            let numsForArray = arrayFromNumber.map((el, index) => index + 1)
            const firstThreeElementsOfNews = numsForArray.slice(0, 3);
            const lastThreeElementsOfNews = numsForArray.slice(numsForArray.length - 4);
            return [...firstThreeElementsOfNews, ...lastThreeElementsOfNews]
        }
    }

    const trimArrayByPageNumber = (arr, num) => {
        let maxLengthOfArray = 5
        const start = Math.max(num, 0);
        const end = Math.min(num + maxLengthOfArray, arr.length);
        return arr.slice(start + 1, end + 1);
    }


    const showNextTabOfNews = () => {
        if (numbersArray() !== pageTabNumber) {
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
        <>
            <section className={`bg-gray-200 bg-opacity-50 relative`}>
                <div id='header' className="min-h-screen">
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

                <div className="relative z-[5]">
                    <div ref={top} className="mt-[5%]">
                        <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                            Главная
                        </h1>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <div className="flex xl:flex-row flex-col pt-[5%] xl:w-[90%] w-[80%]">
                            <div className="flex flex-wrap justify-center w-full h-full">
                                {
                                    pageTabNumber === 1 ?
                                        newsFromWebsite.slice(0, 5).map((card, index) => {
                                            return (
                                                <HorizontalNewsCard imgSource={worldPics} index={index} key={new Date() + `${index}`} {...card} />
                                            )
                                        })
                                    :
                                        trimArrayByPageNumber(newsFromWebsite, pageTabNumber * 5).map((card, index) => {
                                            return (
                                                <HorizontalNewsCard imgSource={worldPics} index={index} key={new Date() + `${index}`} {...card} />
                                            )
                                        })
                                }
                            </div>
                            <div className="xl:w-[20%] w-[100%]">
                                <SideInfoCards />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex items-center justify-center bg-gray-100 mt-[5%]">
                            <div className="flex items-center">
                                <div>
                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                         aria-label="Pagination">
                                        <div onClick={showPrevTabOfNews} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        {
                                            <div>
                                                {
                                                    lengthOfNews(numbersArray()).length > 6 ?
                                                        lengthOfNews(numbersArray()).map((el, index) => {
                                                            if (index === 3) {
                                                                return (
                                                                    <span key={new Date() + `${index}`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                                                )
                                                            }
                                                            return (
                                                                <button key={new Date() + `${index}`} onClick={() => {setPageTabNumber(el); executeTopScroll()}} className={`${el === pageTabNumber ? "active [&.active]:bg-gray-300" : ""} cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0`}>
                                                                    {/*<a href={'#ScrollToMainNews'}>*/}
                                                                        <p>{el}</p>
                                                                    {/*</a>*/}
                                                                </button>
                                                            )
                                                        })
                                                    :
                                                        lengthOfNews(numbersArray()).map((el, index) => {
                                                            return (
                                                                <button key={new Date() + `${index}`} onClick={() => {setPageTabNumber(el); executeTopScroll()}} className={`${el === pageTabNumber ? "active [&.active]:bg-gray-300" : ""} cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0`}>
                                                                    {/*<a href={'#ScrollToMainNews'}>*/}
                                                                        <p>{el}</p>
                                                                    {/*</a>*/}
                                                                </button>
                                                            )
                                                        })
                                                }
                                            </div>

                                        }
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
