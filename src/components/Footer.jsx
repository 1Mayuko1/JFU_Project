import React from 'react';
import styles from "../style";
import {footerLinks, socialMedia} from "../constants/constants";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div>
                <div className={`bg-gray-50 relative ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section className={`${styles.flexCenter} sm:pt-8 sm:pb-8 py-6 flex-col`}>

                            <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-5`}>
                                <div className="flex-1 w-[100%] h-auto flex flex-col justify-center items-center mr-10">
                                    <div className="flex flex-row items-center justify-center cursor-pointer" onClick={() => alert('Hello!')}>
                                        <p className="text-mainBlue text-[100px] font-poppins font-semibold">J</p>
                                        <p className="text-mainBlue text-[100px] font-poppins font-semibold">F</p>
                                        <p className="text-mainBlue text-[100px] font-poppins font-semibold">U</p>
                                    </div>
                                </div>

                                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                                    {footerLinks.map((footerLink) => (
                                        <div key={footerLink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                                            <h4 className="font-medium text-[18px] leading-[27px] text-gray-700">
                                                {footerLink.title}
                                            </h4>
                                            <ul className="list-none mt-4"> {footerLink.links.map((link, index) => (
                                                <div key={new Date() + `${index}`}>
                                                    <Link to={`${link.link}`}>
                                                        <li className={`font-normal text-gray-700 cursor-pointer text-[16px] hover:text-black ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                                                            {link.name}
                                                        </li>
                                                    </Link>
                                                </div>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-400">
                                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-700">
                                    Copyright Ⓒ 2023 JewishKyiv. All Rights Reserved.
                                </p>

                                <div className="flex flex-row md:mt-0 mt-6">
                                    {socialMedia.map((social, index) => (
                                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[25px] h-[25px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(social.link)}/>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
