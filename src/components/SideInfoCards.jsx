import React, {useState} from 'react';
import GreyButton from "./GreyButton";
import {Link, useNavigate} from "react-router-dom";
import {jewishStarIcon, search} from "../assets";
import {bottomLinks, cloudTags} from "../constants/constants";

const SideInfoCards = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/newPost/${searchTerm}`)
        setSearchTerm('')
    }

    const handleChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
    };

    return (
        <section>
            <div className="hidden xl:block w-full">
                <div className="max-w-sm p-6 bg-gray-200 border-2 border-gray-700 rounded-lg mb-5">
                    <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700">
                        Еврейский фонд в украине
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins pb-5 pt-4">
                        Ключевые идеи организации — поддержка и возрождение еврейской культуры и общинной жизни в стране. Еврейский фонд организовывает и финансирует проекты, направленные на развитие еврейской культуры и поддержку общин.
                    </p>
                    <div className="group cursor-pointer flex-1 min-w-[200px] bg-gray-400 bg-opacity-60 rounded-lg border">
                        <div className="flex-1 flex justify-center items-center flex-row m-3">
                            <button type="button" className="font-poppins text-sm font-medium text-gray-700 outline-none items-center text-gray-700 font-semibold">
                                Пожертвовать
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <a href="https://www.jhf.nl/">
                        <div className="">
                            <div>
                                <img className="rounded-md" src="https://www.jhf.nl/images/logo/logo_jhf_nl.png" alt="image"/>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700">
                                Наши партнеры
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins">
                                Голландский еврейский гуманитарный фонд - продвигает еврейскую жизнь в Центральной и Восточной Европе.
                            </p>
                        </div>
                    </a>
                </div>

                <div className="max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <a href="#">
                        <div className="flex flex-row w-full">
                            <div className="w-[50%]">
                                <img className="w-full h-full rounded-md object-cover" src="https://to4ka.fun/wp-content/uploads/2022/04/pravo-na-zahist-3.jpg" alt="image"/>
                            </div>
                            <div className="w-[50%]">
                                <img className="w-full h-full rounded-md object-cover" src="https://web.archive.org/web/20211026134048im_/https://www.jewishkiev.com.ua/images/stories/banner/assembly.png" alt="image"/>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700">
                                При поддержке
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins">
                                Ассамблея национальностей – это объединение представ
                            </p>
                            <p className="mb-3 font-normal text-gray-700 text-[18px] font-poppins">
                                Благотворительный Фонд «Право на защиту» – признанный лидер общественного сектора в сфере миграции в Украине.
                            </p>
                        </div>
                    </a>
                </div>

                <div className="max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <div className="p-5">
                        <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700 text-center">
                            Найти новость
                        </h5>
                    </div>
                    <div className="flex justify-center items-center pb-10">
                        <form method="GET" onSubmit={handleSubmit}>
                            <div className="border-2 border-[#616161] rounded-xl bg-gray-300 flex flex-row justify-center items-center">
                                <div className="flex items-center pl-2">
                                    <button type="button" className="p-1 focus:outline-none focus:shadow-outline">
                                        <Link to={`/newPost/${searchTerm}`}>
                                            <img src={search} alt="searchIcon"/>
                                        </Link>
                                    </button>
                                </div>
                                <div className="text-gray-700">
                                    <input type="text" name="search" className="w-full h-[50px] justify-center items-center placeholder-gray-600 text-sm text-gray-700 bg-gray-300 rounded-xl pl-3 focus:outline-none focus:text-gray-700" placeholder="Search some text" value={searchTerm} onChange={handleChange}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <div className="pt-10 pb-2">
                        <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700 text-center">
                            Меню сайта
                        </h5>
                    </div>
                    <div className="flex flex-col items-center pb-5">
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

                <div className="max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <div className="pt-10 pb-2">
                        <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700 text-center">
                            Облако тегов
                        </h5>
                    </div>
                    <div className="flex flex-wrap items-center pb-5">
                        {
                            cloudTags.map((item) => {
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

                <div className="max-w-sm bg-gray-200 border-2 border-gray-700 rounded-lg my-5">
                    <div className="p-5">
                        <h5 className="font-poppins mb-2 text-2xl font-bold tracking-tight text-gray-700">
                            Наши проекты
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quisquam reprehenderit tempora?
                        </p>
                        <p className="mb-3 font-normal text-gray-700 text-[18px]">
                            At delectus deleniti illo obcaecati porro sunt, totam.
                        </p>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="w-[50%]">
                            <img className="w-full h-full rounded-md object-cover" src="https://web.archive.org/web/20211026134048im_/https://www.jewishkiev.com.ua/images/stories/banner/banner_museum.jpg" alt="image"/>
                        </div>
                        <div className="w-[50%]">
                            <img className="w-full h-full rounded-md object-cover" src="https://web.archive.org/web/20211026134048im_/https://www.jewishkiev.com.ua/images/stories/banner/jew-fund.png" alt="image"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SideInfoCards;
