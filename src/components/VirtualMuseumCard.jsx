import React from 'react';
import {creatorMuseumImg} from "../assets";

const VirtualMuseumCard = () => {
    return (
        <section>
            <div className="w-full flex justify-center mt-[5%] pb-[5%]">
                <div className="w-[80%] semiLgXl:w-[65%] flex flex-col sm:flex-row items-center bg-gray-50 rounded-xl shadow-xl shadow-2xl">
                    <img className="h-auto object-cover w-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={creatorMuseumImg} alt="image" />
                    <div className="flex flex-col justify-between mx-4 leading-normal my-5 sm:my-0">
                        <h5 className="mb-3 font-poppins text-gray-700 text-[16px] font-semibold text-gray-700">
                            Виртуальный музей Аркадия Монастырского
                        </h5>
                        <p className="font-normal text-gray-700 text-[14px] font-poppins">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, amet animi architecto dignissimos ducimus enim excepturi, facere ipsam ipsum, numquam optio placeat tempore? Dicta illum laudantium quam recusandae sunt tempora, unde? Enim fuga illo molestiae nam obcaecati qui quod saepe! Commodi dignissimos eaque ipsam iusto laborum modi optio quasi!
                        </p>
                        <div className="border-2 border-[#616161] shadow-xl cursor-pointer w-[200px] bg-gray-50 rounded-lg border mt-5">
                            <a className="flex-1 flex justify-center items-center flex-row m-3" href="#https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%81%D0%BA%D0%B8%D0%B9,_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B8%D0%B9_%D0%98%D0%BB%D1%8C%D0%B8%D1%87">
                                <button type="button" className="text-sm font-medium text-gray-900 outline-none items-center text-gray-700 font-semibold">
                                    Перейти на страницу
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualMuseumCard;
