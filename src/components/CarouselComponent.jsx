import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import {chessTestImage} from "../assets";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarouselComponent = () => {
    return (
        <div className="w-[80%]">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chessTestImage} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"/>
                    </div>
                    <div className="swiper-pagination"/>
                </div>
            </Swiper>
        </div>
    );
}

export default CarouselComponent;
