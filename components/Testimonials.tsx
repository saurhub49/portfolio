"use client";

import React from 'react'
import { useSectionInView } from './hooks/useSectionInView';
import Image from 'next/image';
import { prafull } from '@/lib/assets';
import SectionHeader from './helpers/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/components/css/testimonialStyles.css';
import { testimonials } from '@/lib/data';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const { ref } = useSectionInView('Testimonials');
    const progressCircle = React.useRef(null);
    const progressContent = React.useRef(null);
    const onAutoplayTimeLeft = (_s: any, time: any, progress: any) => {
        (progressCircle.current as any)?.style.setProperty('--progress', 1 - progress);
        if (!!(progressContent.current as any)) {
            (progressContent.current as any).textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <section ref={ref} className='mt-32 testimonial flex flex-col items-center justify-center'>
            <SectionHeader urlId='testimonials' title='Testimonials' description='Endorsements, Testimonies and Words of Recommendation' />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 200
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{
                    once: true,
                }}
            >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    grabCursor={false}
                    loop={false}
                    pagination={{
                        clickable: true,
                        //el: '.swiper-custom-pagination'
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col gap-10 items-center justify-center text-center px-3 h-[600px] sm:px-8 sm:mx-4 sm:h-[400px] md:h-[350px] md:px-20 border border-[#8266ff] border-r-8 border-l-8 border-t-0 border-b-0 '>
                                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                                        <Image
                                            src={testimonial.image}
                                            alt="Saurabh Mahajan"
                                            quality="95"
                                            priority={true}
                                            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                                        />
                                        <div className='flex flex-col items-center sm:items-start text-center'>
                                            <h3 className='font-bold text-xl'>{testimonial.name}</h3>
                                            <p className='text-gray-500'>{`${testimonial.designation}, ${testimonial.company}`}</p>
                                        </div>
                                    </div>
                                    <p className='italic'>
                                        {`"${testimonial.testimonial}"`}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </motion.div>

        </section>
    )
}

export default Testimonials;