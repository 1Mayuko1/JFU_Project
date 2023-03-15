import React, {useRef, useState} from 'react';
import {arrowUp, chessTestImage, facebook, jewishStarIcon, linkedin, twitter} from "../assets";
import styles from "../style";
import {bottomLinks, contacts, newsFromWebsite, worldPics} from "../constants/constants";
import CarouselComponent from "./CarouselComponent";
import HorizontalNewsCard from "./HorizontalNewsCard";
import {Link} from "react-router-dom";
import LoadingButton from "./LoadingButton";
import GreyButton from "./GreyButton";

const Hero = () => {

    const [visibleItems, setVisibleItems] = useState(4)
    const [btnLoaderMoreVisible, setBtnLoaderMoreVisible] = useState(false)
    const [btnLoaderLessVisible, setBtnLoaderLessVisible] = useState(false)
    const top = useRef(null)
    const bottom = useRef(null)

    const executeTopScroll = () => top.current.scrollIntoView()
    const executeBottomScroll = () => bottom.current.scrollIntoView()

    const showMoreNews = () => {
        if (visibleItems !== newsFromWebsite.length) {
            setBtnLoaderMoreVisible(true)
            setTimeout(() => {
                setBtnLoaderMoreVisible(false)
                setVisibleItems((prevState) => prevState + 2)
            }, 2000);
        }
    }

    const showLessNews = () => {
        if(visibleItems > 2) {
            setBtnLoaderLessVisible(true)
            setTimeout(() => {
                setBtnLoaderLessVisible(false)
                setVisibleItems((prevState) => prevState - 2)
            }, 2000);
        }
    }

    return (
        <section ref={top} className={`bg-gray-200 bg-opacity-50`}>

            <div className="pt-[6%]">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-600 ss:leading-[100.8px] leading-[75px] text-center">
                    Главная
                </h1>
            </div>

            <div className="flex justify-center items-center w-full py-20">
                <CarouselComponent />
            </div>

            <div>
                <div className="flex flex-wrap justify-center w-full">
                    {newsFromWebsite.slice(0, visibleItems).map((card, index) => (
                            <div className="flex flex-wrap justify-center w-full">
                                <HorizontalNewsCard imgSource={worldPics} index={index} key={card.id} {...card} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center items-center w-full py-20">
                <section className="bg-gray-100 flex flex-row flex-wrap mb-6 justify-between items-center">

                    <div className="group cursor-pointer flex-1 min-w-[270px]" onClick={executeTopScroll}>
                        <div className="flex-1 flex justify-center items-center flex-row m-3">
                            <h4 className="font-poppins font-semibold xs:text-[30.89px] text-[25.89px] xs:leading-[53.16px] leading-[43.16px] text-gray-600">
                                В начало
                            </h4>
                            <img src={arrowUp} alt="arrow-up" className="ml-1 transform w-[23px] h-[23px] object-contain group-hover:translate-x-2 group-hover:-translate-y-1" />
                        </div>
                    </div>

                    <div className="group cursor-pointer flex-1 min-w-[200px] mx-10" onClick={showLessNews}>
                        <div className={``}>
                            {
                                !btnLoaderLessVisible ? <GreyButton title={'Показать меньше'}/> : <LoadingButton title={'Загрузка...'}/>
                            }
                        </div>
                    </div>

                    <div className="group cursor-pointer flex-1 min-w-[200px] mx-10" onClick={showMoreNews}>
                        <div className={``}>
                            {
                                !btnLoaderMoreVisible ? <GreyButton title={'Загрузить ещё'}/> : <LoadingButton title={'Загрузка...'}/>
                            }
                        </div>
                    </div>

                    <div className="group cursor-pointer flex-1 min-w-[270px]" onClick={executeBottomScroll}>
                        <div className="flex-1 flex justify-center items-center flex-row m-3">
                            <img src={arrowUp} alt="arrow-up" className="rotate-180 group-hover:-translate-x-1.5 group-hover:translate-y-0.5 mr-1" />
                            <h4 className="font-poppins font-semibold xs:text-[30.89px] text-[25.89px] xs:leading-[53.16px] leading-[43.16px] text-gray-600">
                                В конец
                            </h4>
                        </div>
                    </div>

                </section>
            </div>

            <div id="preFooter" className="flex md:flex-row justify-evenly ultraSmall:flex-col mt-20">
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
                                    <input type="text" name="name" className="px-2 py-1 bg-gray-50 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                                    Ваш e-mail
                                </label>
                                <div className="flex flex-col items-start">
                                    <input type="email" name="email" className="px-2 py-1 bg-gray-50 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 undefined">
                                    Номер телефона
                                </label>
                                <div className="flex flex-col items-start">
                                    <input name="phone" className="px-2 py-1 bg-gray-50 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 undefined">
                                    Сообщение
                                </label>
                                <div className="flex flex-col items-start">
                                    <textarea name="password_confirmation" className="h-[100px] px-2 py-1 bg-gray-50 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md shadow-sm outline-none"/>
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
                        contacts.map((item) => {
                            return (
                                <div className="group cursor-pointer flex flex-row justify-center items-center pt-5 pb-3">
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
                        bottomLinks.map((item) => {
                            return (
                                <div className="group cursor-pointer flex flex-row justify-center items-center p-3 ">
                                    <img src={jewishStarIcon} alt="icon" className="w-[18px] h-[18px] cursor-pointer mr-2"/>
                                    <p className="font-poppins font-normal text-gray-700 text-[18px] group-hover:font-semibold">
                                        {item.title}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div ref={bottom} id="bottom"/>

            </div>
        </section>
    );
};

export default Hero;
