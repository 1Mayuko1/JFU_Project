import React, {useState, useRef, useEffect} from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import {chessTestImage, town} from "../assets";

const imagesForCarousel = [ town, chessTestImage ];

let count = 0;
// let slideInterval;

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        // slideRef.current.addEventListener("mouseenter", pauseSlider);
        // slideRef.current.addEventListener("mouseleave", startSlider);
    }, []);

    // const startSlider = () => {
    //     slideInterval = setInterval(() => {
    //         handleOnNextClick();
    //     }, 3000);
    // };
    //
    // const pauseSlider = () => {
    //     clearInterval(slideInterval);
    // };

    const handleOnNextClick = () => {
        count = (count + 1) % imagesForCarousel.length;
        // slideRef.current.classList.add("fade-anim");
        setTimeout(() => {
            setCurrentIndex(count);
        }, 600)
    };

    const handleOnPrevClick = () => {
        const productsLength = imagesForCarousel.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        // slideRef.current.classList.add("fade-anim");
        setTimeout(() => {
            setCurrentIndex(count);
        }, 600)
    };

    return (
        <div ref={slideRef} className="w-[50%] select-none relative justify-center items-center delay-100 duration-500">
            <div className="aspect-w-16 aspect-h-9">
                <img src={imagesForCarousel[currentIndex]} alt="images" className="rounded-xl"/>
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button className="p-1 cursor-pointer"
                        onClick={handleOnPrevClick}>
                    <AiOutlineVerticalRight size={30} color={'#616161'} />
                </button>
                <button className="p-1 cursor-pointer"
                        onClick={handleOnNextClick}>
                    <AiOutlineVerticalLeft size={30} color={'#616161'} />
                </button>
            </div>
        </div>
    )
}

export default CarouselComponent;
