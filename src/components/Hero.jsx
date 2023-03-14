import React from 'react';
import {chessTestImage, facebook, jewishStarIcon, linkedin, twitter} from "../assets";
import styles from "../style";
import {bottomLinks, contacts} from "../constants/constants";
import CarouselComponent from "./CarouselComponent";

const Hero = () => {
    return (
        <section className="bg-gray-50">

            <div className="flex justify-center items-center">
                <CarouselComponent />
            </div>

            <div id="preFooter" className="flex md:flex-row justify-evenly ultraSmall:flex-col">
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

                <div className="flex flex-col p-10 sm:pt-0">
                    <div>
                        <h3 className="md:text-4xl ultraSmall:text-3xl font-bold text-gray-700 items-center">
                            Наши контакты
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

            </div>
        </section>
    );
};

export default Hero;
