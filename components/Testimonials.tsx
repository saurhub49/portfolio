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


const testimony = "I highly recommend Saurabh as a dedicated and knowledgeable professional in software development. His invaluable contributions during our postgraduate course were evident in both technical discussions and project development. Saurabh's exceptional problem-solving skills make him an asset to any team or project.";

const Testimonials = () => {
    const { ref } = useSectionInView('Testimonials');
    return (
        <section ref={ref} className='mt-20 testimonial flex flex-col items-center justify-center'>
            <SectionHeader urlId='testimonials' title='Testimonials' description='Endorsements, Testimonies and Words of Recommendation' />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                grabCursor={false}
                loop={false}
                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination'
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {
                    testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-10 items-center justify-center text-center px-3 h-[600px] sm:px-8 sm:mx-4 md:h-[350px] md:px-20 border border-[#8266ff] border-r-8 border-l-8 border-t-0 border-b-0 '>
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

            </Swiper>
            <div className="swiper-custom-pagination flex justify-center gap-2 mt-2" />
        </section>
    )
}

export default Testimonials;