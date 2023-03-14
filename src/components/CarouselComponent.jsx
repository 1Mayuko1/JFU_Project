import React, { useState, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import {chessTestImage, town} from "../assets";

const featuredProducts = [
    town,
    chessTestImage,
];

let count = 0;
const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(false);
    const slideRef = useRef();

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);

    };

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    };

    return (
        <div ref={slideRef} className="w-[50%] select-none relative justify-center items-center delay-100 duration-500">
            <div className="aspect-w-16 aspect-h-9">
                <img src={featuredProducts[currentIndex]} alt="images" className="rounded-xl"/>
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
