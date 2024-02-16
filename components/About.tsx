"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './helpers/SectionHeader';
import { useSectionInView } from './hooks/useSectionInView';
import { aboutCarousel1, aboutCarousel2, aboutCarousel3, aboutCarousel4, aboutCarousel5, aboutCarousel6 } from '@/lib/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/components/css/aboutCarouselStyles.css';

const images = [
    aboutCarousel1,
    aboutCarousel2,
    aboutCarousel3,
    aboutCarousel4,
    aboutCarousel5,
    aboutCarousel6
];

const About = () => {
    const { ref } = useSectionInView('About');
    const progressCircle = React.useRef(null);
    const progressContent = React.useRef(null);
    const onAutoplayTimeLeft = (_s: any, time: any, progress: any) => {
        (progressCircle.current as any)?.style.setProperty('--progress', 1 - progress);
        if (!!(progressContent.current as any)) {
            (progressContent.current as any).textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <motion.section
            ref={ref}
            className='flex flex-col items-center justify-center md:px-24 lg:px-36 xl:px-48 mt-32'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 2,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeader urlId='about' title='About Me' description='Who I Am in a Nutshell' />
            <div className={`flex flex-col sm:flex-row items-center justify-between gap-5`}>
                <motion.div
                    className='flex flex-shrink-0 about'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        effect={'flip'}
                        grabCursor={false}
                        loop={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[EffectFlip, Autoplay, Pagination, Navigation]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image alt="Saurabh" src={image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.div
                    className='flex flex-col text-center sm:text-start'
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}
                >
                    <p>
                        Greetings! 🚀 I{`'`}m a dynamic{' '}<span className='font-bold'>Fullstack Software Engineer</span>, driving advancements in technology to empower organizations globally.
                        Proficient in a diverse tech stack including{' '}<span className='font-medium italic'>Java, Spring Framework, PostgresSQL, JavaScript, TypeScript, React, C#, .NET, Material-UI, Tailwind, Redux</span>, and more,
                        I contribute to the architecture and development of high-performance applications.
                    </p>
                    <p>
                        Beyond coding, I thrive on creating empowering and collaborative environments, championing technological innovation, and fostering connections to push the boundaries of excellence.
                    </p>
                    <p>
                        As a{' '}<span className='font-bold'>Gamer🎮</span>, and a{' '}<span className='font-bold'>Footballer⚽️</span>, I bring passion to both my professional and personal pursuits.
                        A{' '}<span className='font-bold'>Wanderlust🛣️</span> enthusiast and{' '}<span className='font-bold'>Orophile⛰️</span>, I thrive on exploring diverse landscapes.
                        A{' '}<span className='font-bold'>Melomane🎵</span> and avid{' '}<span className='font-bold'>TV😍</span> enthusiast, I find joy in the finer aspects of life.
                        Also, a proud enthusiast of{' '}<span className='font-bold'>Tea☕️</span> who appreciates{' '}<span className='font-bold'>bike rides, beaches, and mountains</span> alike.
                    </p>
                    <p className='mt-2'>
                        Always eager to connect with like-minded professionals and individuals who share a zest for{' '}<span className='italic'>technology, innovation, and life{`'`}s</span> adventures.
                    </p>
                    <p className='mt-2'>
                        Let{`'`}s push boundaries together! 🌐
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;