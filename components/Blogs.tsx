"use client";

import React from 'react';
import { useSectionInView } from './hooks/useSectionInView';
import SectionHeader from './helpers/SectionHeader';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/components/css/wall.css';
import { blogLink, blogs } from '@/lib/data';
import { Tilt } from 'react-tilt';

const Blogs = () => {
    const { ref } = useSectionInView('Wall');

    return (
        <section ref={ref} className='mt-32'>
            <SectionHeader urlId='wall' title='Wall' description="My Literary Haven, Tales & Chronicles" />
            <motion.div
                className='flex flex-col justify-center items-center gap-16 py-5 xl:px-48'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'tween',
                    duration: 0.2
                }}
            >
                {
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
                        {blogs.map((blog, index) => (
                            <Tilt
                            className='basis-1/2 min-w-80 2xl:min-w-[450px] max-w-max h-[500px] 2xl:h-[600px]'
                            key={blog.id}>
                                <motion.div
                                    className="flex flex-col items-center justify-between min-w-80 2xl:min-w-[600px] max-w-max h-[500px] 2xl:h-[600px] bg-[#e2e8f0] border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 p-5"
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                            x: index % 2 === 0 ? -100 : 100,
                                        },
                                        animate: (index: number) => ({
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: 0.05 * index,
                                            },
                                        }),
                                    }}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index + 1}
                                >
                                    <Image
                                        className="rounded-lg items-center justify-center cursor-default"
                                        src={blog.coverImage.url}
                                        onClick={(e: React.MouseEvent<HTMLImageElement>) => e.preventDefault()}
                                        alt=""
                                        width={0}
                                        height={0}
                                        style={{ width: '700px', height: 'auto' }}
                                    />
                                    <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden 2xl:block">{blog.brief}</p>
                                    <a href={blog.url} target="_blank" className="inline-flex w-fit self-end gap-1 items-center px-3 py-2 bg-white sm:hover:bg-[#8266ff] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 border-opacity-40 shadow-2xl rounded-full justify-center hover:scale-[1.10] active:scale-105 transition-all dark:bg-gray-950">
                                        Read more
                                        <HiMiniArrowTopRightOnSquare />
                                    </a>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>}
                <a href={blogLink} target="_blank" className="inline-flex w-fit gap-1 items-center px-4 text-lg font-medium text-center rounded-lg hover:underline">
                    See more blogs
                    <HiMiniArrowTopRightOnSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Blogs;