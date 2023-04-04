import React, {useEffect, useState} from "react";
import {carousel_img_1, carousel_img_2, carousel_img_3} from "../assets";

const CarouselComponent = () => {
    const slides = [
        {
            url: carousel_img_1,
        },
        {
            url: carousel_img_2,
        },
        {
            url: carousel_img_3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(!toggle)
            nextSlide()
        }, 10000)

        return () => {
            clearInterval(interval);
        };
    }, [toggle]);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='h-screen min-h-[800px] w-full'>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'/>
        </div>
    )
}

export default CarouselComponent;
