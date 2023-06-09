import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import {chevronRight, chevronDown, close, menu, search, fond_logo, forum_logo} from "../assets";
import {dropDownNavLinks, simpleNavLinks} from "../constants/constants";
import styles from "../style";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const [dropDownMenuVisible, setDropDownMenuVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [isVisibleFixedNav, setIsVisibleFixedNav] = useState(false);

    function handleScroll() {
        const scrolled = window.scrollY >= 1200;
        setIsVisibleFixedNav(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/newPost/${searchTerm}`)
        setSearchVisible(false)
        setSearchTerm('')
    }

    const handleChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
    };

    const checkDropDownVisible = () => {
        setDropDownVisible(!dropDownVisible)
        if (toggleMenu) {
            setToggleMenu(false)
        } else if (searchVisible) {
            setSearchVisible(false)
        } else if (dropDownMenuVisible) {
            setDropDownMenuVisible(false)
        }
    }

    const checkDropDownMenuVisible = () => {
        setDropDownMenuVisible(!dropDownMenuVisible)
        if (searchVisible) {
            setSearchVisible(false)
        } else if (dropDownVisible) {
            setDropDownVisible(false)
        }
    }

    const checkSearchVisible = () => {
        setSearchVisible(!searchVisible)
        if (toggleMenu) {
            setToggleMenu(false)
        } else if (dropDownVisible) {
            setDropDownVisible(false)
        } else if (dropDownMenuVisible) {
            setDropDownMenuVisible(false)
        }
    }

    const checkMenuVisible = () => {
        setToggleMenu(!toggleMenu)
        if (searchVisible) {
            setSearchVisible(false)
        } else if (dropDownVisible) {
            setDropDownVisible(false)
        } else if (dropDownMenuVisible) {
            setDropDownMenuVisible(false)
        }
    }

    // const handleChangeVisibleNav = () => {
    //     setToggleMenu(false)
    //     setSearchVisible(false)
    //     setDropDownVisible(false)
    //     setDropDownMenuVisible(false)
    // }

    return (
        <div className={`${isVisibleFixedNav ? "fixed top-0 fixed-nav-visible" : "flex"} z-[10] sm:px-10 px-6 flex justify-center items-center bg-gray-50 w-full transition-all duration-500 ease-in-out`}>
            <div className="w-full">
                {/*<div className='absolute top-0 left-0 w-[100%] h-[100%] z-[3]' onClick={handleChangeVisibleNav}/>*/}
                <div className={`${styles.boxWidth}`}>
                    <nav className="w-full flex py-6 justify-between items-center navbar">
                        <div className="relative z-[3] w-[124px] h-[32px] flex flex-row items-center cursor-pointer">
                            {/*<img src={forum_logo} alt="logo" className="mr-1 w-[60px] h-[40px]"/>*/}
                            <img src={fond_logo} alt="logo" className="mr-1 w-[30px] h-[40px]"/>
                            <p className={`text-mainBlue text-[30px] font-semibold`}>J</p>
                            <p className={`text-mainBlue text-[30px] font-semibold`}>F</p>
                            <p className={`text-mainBlue text-[30px] font-semibold`}>U</p>
                        </div>

                        <ul className="relative z-[3] list-none semiMd:flex hidden justify-end items-center flex-1">
                            <li className={`font-poppins font-normal text-gray-700 cursor-pointer text-[18px] hover:text-black mr-10 ml-10 `}>
                                <Link to={`/`}>Главная</Link>
                            </li>
                            <div className="group flex flex-row justify-center items-center mr-10" onClick={checkDropDownVisible}>
                                <li className={`font-poppins font-normal text-gray-700 cursor-pointer text-[18px] hover:text-black`}>
                                    <p>Новости</p>
                                </li>
                                <img alt="arrow" src={dropDownVisible ? chevronDown : chevronRight} className="w-[12px] h-[12px] items-start ml-2 mt-1"/>
                            </div>
                            {simpleNavLinks.map((nav, index) => (
                                <li key={new Date() + `${index}`} className={`font-poppins font-normal text-gray-700 cursor-pointer text-[18px] hover:text-black ${index === simpleNavLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>

                        {/*DropDown*/}
                        <div className={`${!dropDownVisible ? "hidden" : "flex"} p-3 bg-gray-50 absolute top-20 right-40 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[3] shadow-xl`}>
                            <ul className="list-none flex justify-end items-center flex-1 flex-col">
                                {dropDownNavLinks.map((nav, index) => (
                                    <Link key={new Date() + `${index}`} to={`/${nav.id}`}>
                                        <li className={`w-full text-center hover:rounded-lg px-5 py-2 hover:bg-gray-200 font-poppins cursor-pointer text-gray-700 text-[16px] ${index === dropDownNavLinks.length - 1 ? "mb-0" : "mb-4"}`} onClick={() => setDropDownVisible(false)}>
                                            {nav.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        {/*DropDownMenu*/}
                        <div className={`${!dropDownMenuVisible ? "hidden" : "flex"} p-3 bg-gray-100 absolute top-20 right-40 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[4] shadow-xl`}>
                            <ul className="list-none flex justify-end items-center flex-1 flex-col">
                                {dropDownNavLinks.map((nav, index) => (
                                    <li key={new Date() + `${index}`} className={`w-full text-center rounded-lg px-2 py-1 hover:bg-gray-200 font-poppins font-medium cursor-pointer text-gray-700 text-[16px] ${index === dropDownNavLinks.length - 1 ? "mb-0" : "mb-3"}`} onClick={() => {setToggleMenu(false); setDropDownMenuVisible(false)}}>
                                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="semiMd:hidden flex flex-1 justify-end items-center">
                            <img src={toggleMenu ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain relative z-[1] cursor-pointer" onClick={checkMenuVisible}/>
                            <div className={`${!toggleMenu ? "hidden" : "flex"} p-6 bg-gray-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[3] shadow-xl`}>
                                <ul className="w-full list-none flex-col">
                                    <div className="hover:bg-gray-200 px-1 py-1 rounded-lg w-full flex flex-row justify-center items-center mb-4">
                                        <li className={`font-poppins font-normal text-gray-700 cursor-pointer text-[16px]`}>
                                            <Link to={`/`}><p>Главная</p></Link>
                                        </li>
                                    </div>
                                    {simpleNavLinks.map((nav, index) => (
                                        <div className="hover:bg-gray-100">
                                            <li key={new Date() + `${index}`} className={`w-full text-center rounded-lg px-3 py-1 hover:bg-gray-200 font-poppins font-medium cursor-pointer text-gray-700 text-[16px] mb-4`} onClick={() => {setToggleMenu(false); setDropDownMenuVisible(false)}}>
                                                <Link to={`/${nav.id}`}>{nav.title}</Link>
                                            </li>
                                        </div>
                                    ))}
                                    <div className="hover:bg-gray-200 px-1 py-1 rounded-lg w-full flex flex-row justify-center items-center" onClick={checkDropDownMenuVisible}>
                                        <li className={`font-poppins font-normal text-gray-700 cursor-pointer text-[16px]`}>
                                            <p>Новости</p>
                                        </li>
                                        <img alt="arrow" src={dropDownMenuVisible ? chevronDown : chevronRight} className="w-[12px] h-[12px] items-start ml-1"/>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className={`semiMd:flex hidden ml-10 justify-end items-center`}>
                            <div className="w-[22px] h-[22px]">
                                <img onClick={checkSearchVisible} src={searchVisible ? close : search} alt="search" className="relative z-[3] w-[22px] h-[22px] cursor-pointer"/>
                            </div>
                            <div className={`${!searchVisible ? "hidden" : "flex"} absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl z-[3] shadow-xl`}>
                                <form method="GET" onSubmit={handleSubmit}>
                                    <div className="text-gray-700">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="button" className="p-1">
                                            <Link to={`/newPost/${searchTerm}`}>
                                                <img src={search} alt="searchIcon"/>
                                            </Link>
                                        </button>
                                    </span>
                                        <input type="text" name="search" className="py-2 w-[290px] h-[50px] placeholder-gray-600 text-sm text-gray-700 bg-gray-50 rounded-xl pl-10 focus:outline-none focus:text-gray-700" placeholder="Search some text" value={searchTerm} onChange={handleChange}/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className={`semiMd:hidden ml-10 justify-end items-center`}>
                            <img onClick={() => {checkSearchVisible(); setDropDownMenuVisible(false)}} src={searchVisible ? close : search} alt="search" className="relative z-[1] w-[30px] h-[30px] object-contain cursor-pointer"/>
                            <div className={`${!searchVisible ? "hidden" : "flex"} absolute top-20 right-0 right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl z-[3] shadow-xl`}>
                                <form method="GET" onSubmit={handleSubmit}>
                                    <div className="text-gray-700">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="button" className="p-1"
                                                onClick={() => console.log('hello search')}>
                                            <img src={search} alt="searchIcon"/>
                                        </button>
                                    </span>
                                        <input type="search" name="search" className="py-2 w-[240px] h-[50px] placeholder-gray-600 text-sm text-gray-700 bg-gray-50 rounded-xl pl-10 focus:outline-none focus:text-ray-700 focus:text-gray-700" placeholder="Search some text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};


export default Navbar;
