import React, {useRef, useState} from 'react';
import {arrowDown, arrowUp, jewishStarIcon} from "../assets";
import styles from "../style";
import {bottomLinks, contacts, newsFromWebsite, worldPics} from "../constants/constants";
import CarouselComponent from "./CarouselComponent";
import HorizontalNewsCard from "./HorizontalNewsCard";
import LoadingButton from "./LoadingButton";
import GreyButton from "./GreyButton";
import SideInfoCards from "./SideInfoCards";
import VerticalNewsCard from "./VerticalNewsCard";
import CreatorInfoCard from "./CreatorInfoCard";
import SideInfoBottomVersCards from "./SideInfoBottomVersCards";

const Hero = () => {

    const [btnLoaderMoreVisible, setBtnLoaderMoreVisible] = useState(false)
    const [btnLoaderLessVisible, setBtnLoaderLessVisible] = useState(false)
    const [visibleItems, setVisibleItems] = useState(4)
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
        <section ref={top} className={`bg-gray-200 bg-opacity-50 relative z-[1]`}>
            {/*<img src={town} className="w-full absolute inset-0 bg-gray-900 bg-opacity-70 z-[0] h-screen object-cover" alt="image"/>*/}

            <div className="flex absolute z-[3] w-full mt-[16%]">
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

                    <a className="cursor-pointer mt-20 animate-bounce" href={'#ScrollToNews'}>
                        <div className="rounded-full w-[40px] h-[40px]">
                            <svg className="w-[40px] h-[40px] mt-1.5" width="800px" height="800px" viewBox="0 0 24 24" fill="#4e4e4e" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#4e4e4e"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-full inset-0 h-screen object-cover opacity-60">
                <CarouselComponent />
            </div>

            <div id={'ScrollToNews'} className="mt-[5%]">
                <h1 className="font-poppins font-semibold ss:text-[72px] ultraSmall:text-[45px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] text-center">
                    Главная
                </h1>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="flex xl:flex-row flex-col pt-[5%] xl:w-[90%] w-[80%]">
                    <div className="flex flex-wrap justify-center w-full h-full">
                        {newsFromWebsite.slice(0, visibleItems).map((card, index) => (
                            <HorizontalNewsCard imgSource={worldPics} index={index} key={card.id} {...card} />
                        ))
                        }
                    </div>
                    <div className="xl:w-[20%] w-[100%]">
                        <SideInfoCards />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-center items-center w-full mt-20 mb-10">
                    <section className="bg-gray-100 flex flex-row flex-wrap mb-6 justify-between items-center">

                        <div className="w-full flex flex-wrap justify-center">
                            <div className="flex ss:flex-row flex-col">
                                <div className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5" onClick={executeTopScroll}>
                                    <GreyButton title={'В начало'}/>
                                </div>

                                <div className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5" onClick={showLessNews}>
                                    {!btnLoaderLessVisible ? <GreyButton title={'Показать меньше'}/> : <LoadingButton title={'Загрузка...'}/>}
                                </div>
                            </div>
                            <div className="flex ss:flex-row flex-col">
                                <div className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5" onClick={showMoreNews}>
                                    {!btnLoaderMoreVisible ? <GreyButton title={'Загрузить ещё'}/> : <LoadingButton title={'Загрузка...'}/>}
                                </div>

                                <div className="group cursor-pointer flex-1 min-w-[200px] mx-10 my-5" onClick={executeBottomScroll}>
                                    <GreyButton title={'В конец'}/>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

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
                        {newsFromWebsite.map((card, index) => <VerticalNewsCard elIndex={index} key={card.id} {...card} />)}
                    </div>
                </div>

                <div className="mt-[10%]">
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

            </div>
        </section>
    );
};

export default Hero;
