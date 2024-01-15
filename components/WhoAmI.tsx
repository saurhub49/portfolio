"use client";

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/components/css/whoAmIStyles.css';
import { aboutCarousel1, aboutCarousel2, aboutCarousel3, aboutCarousel4, aboutCarousel5, aboutCarousel6 } from '@/lib/assets';
import Image from 'next/image';

const images = [
    aboutCarousel1,
    aboutCarousel2,
    aboutCarousel3,
    aboutCarousel4,
    aboutCarousel5,
    aboutCarousel6,
    aboutCarousel1,
    aboutCarousel2,
    aboutCarousel3,
    aboutCarousel4,
    aboutCarousel5,
    aboutCarousel6
];

const WhoAmI = () => {
    return (
        <section className='whoami py-20 px-96 max-w-full'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image alt="lol" src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default WhoAmI;