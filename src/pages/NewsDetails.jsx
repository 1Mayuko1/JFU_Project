import React, {useEffect, useState} from 'react';
import {shagal} from "../assets";
import GreyButton from "../components/GreyButton";
import {useNavigate, useParams} from "react-router-dom";
import {newsFromWebsite} from "../constants/constants";
import {InfinitySpin} from "react-loader-spinner";
import {Loader} from "../components";

const NewsDetails = () => {

    const [load, setLoad] = useState(true)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    useEffect(() => {
        setInterval(() => {
            setLoad(false)
        }, 2000)
    }, [])

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const options = { month: 'long', day: 'numeric', year: 'numeric'}
        return rawDate.toLocaleDateString('en-us', options)
    }

    const {newsId} = useParams()
    const data = newsFromWebsite.find(el => el.id === newsId);


    return (
        <section className="">
            <div className="bg-gray-50">
                <Loader load={load}/>
            </div>
            <div className={`${load ? "opacity-0" : "opacity-100"} bg-gray-50 w-full flex justify-center`}>
                <div className="absolute z-[0] w-full h-screen">
                    <img className="w-full max-h-[550px] object-cover" src={"https://images.unsplash.com/photo-1605367031760-5522b8a52756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt=""/>
                </div>
                <div className="relative z-[2] w-full flex justify-center items-center my-[10%]">
                    <div className="relative z-[2] h-auto w-[90%] md:w-[70%] bg-gray-100 shadow-2xl rounded-xl px-10 pb-10">

                        <div className="w-full flex flex-col-reverse semiLg:flex-row justify-between semiLg:pt-20 pt-10">
                            <div className="semiLg:w-[70%] w-full">
                                <div className="">
                                    <h1 className="font-semibold text-[20px] md:text-[25px] text-gray-700 text-left pt-10 semiLg:pt-0">
                                        {formatDate(data.date)}
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold text-[25px] md:text-[30px] text-gray-700 text-left pt-10 semiLg:pt-0">
                                        Израиль:
                                    </h1>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="md:w-[80%] w-full">
                                        <h1 className="font-semibold text-[30px] md:text-[45px] text-gray-700 text-center semiLg:text-left pt-10">
                                            {data.title}
                                        </h1>
                                    </div>
                                    <div className="md:w-[80%] w-full">
                                        <h1 className="font-semibold text-[20px] text-gray-700 semiLg:text-left pt-10">
                                            {data.content}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[500px] xl:h-[500px] xxl:h-[600px] md:h-[500px]
                              w-[30%] semiLg:w-[40%] w-full
                              flex justify-center shadow-xl rounded-xl">
                                <img className="rounded-xl object-cover object-top w-full h-full" src={data.mainImage} alt=""/>
                            </div>
                        </div>

                        <div className="hidden semiLg:block semiLg:w-[15%] border-2 border-gray-700 mt-[50px]">
                            <span />
                        </div>

                        <div className={`${data.paragraphs.length === 0 ? "hidden" : ""}`}>
                            <div className="w-full pt-10 flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="md:w-[80%] w-full">
                                        <h1 className="text-center font-semibold text-[30px] text-gray-700">
                                            Основная информация:
                                        </h1>
                                    </div>
                                    <div className="md:w-[80%] w-full">
                                        <h1 className="md:text-justify font-semibold text-[20px] text-gray-700 text-left pt-10">
                                            {data.details}
                                        </h1>
                                    </div>
                                    <div className="md:w-[80%] w-full">
                                        <h1 className="md:text-justify font-semibold text-[20px] text-gray-700 text-left pt-10">
                                            {data.paragraphs}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center pt-5">
                            <div className="cursor-pointer flex w-[200px] mx-10 my-5" onClick={goBack}>
                                <GreyButton title={'Назад'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
