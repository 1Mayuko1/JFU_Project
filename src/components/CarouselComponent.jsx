import React, {useEffect, useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const CarouselComponent = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1591994719351-273dbc03f137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1591302989198-c5bdcbf64bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1602417805869-1bcbb38de8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1520942321266-64d21b590bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggle, setToggle] = useState(false);

    // console.log('toggle', toggle)

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(!toggle)
            nextSlide()
        }, 10000)

        return () => {
            clearInterval(interval);
        };
    }, [toggle]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex);
    // };

    return (
        <div className='h-screen w-full group'>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full min-h-screen bg-center bg-cover duration-500'/>

            {/*/!* Left Arrow *!/*/}
            {/*<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>*/}
            {/*    <BsChevronCompactLeft onClick={prevSlide} size={30} />*/}
            {/*</div>*/}
            {/*/!* Right Arrow *!/*/}
            {/*<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>*/}
            {/*    <BsChevronCompactRight onClick={nextSlide} size={30} />*/}
            {/*</div>*/}
            {/*<div className='flex top-4 justify-center py-2'>*/}
            {/*    {slides.map((slide, slideIndex) => (*/}
            {/*        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>*/}
            {/*            <RxDotFilled />*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}

export default CarouselComponent;
