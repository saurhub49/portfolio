"use client";

import React from 'react';
import { profile } from '@/lib/assets';
import { heroData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from './hooks/useSectionInView';
import SocialMedia from './helpers/SocialMedia';

const Hero = () => {
    const { ref } = useSectionInView('Home');

    return (
        <section ref={ref} className='text-center md:px-48'>
            <div className={`flex items-center justify-center`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}
                >
                    <Image
                        src={profile}
                        alt="Saurabh Mahajan"
                        quality="95"
                        priority={true}
                        className="h-60 w-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div>
                    <div>
                        <span className="font-bold text-5xl font-mono">Hi, I{`'`}m {heroData.name},</span>
                    </div>
                    <div>
                        <span className="font-medium font-mono">I am a {heroData.profession}.</span>
                    </div>
                    <div>
                        <span className="italic font-mono">{heroData.tagLine}</span>
                    </div>
                </div>
            </motion.h1>

            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <a download href='/SaurabhMahajanResume.pdf' className='group bg-white flex items-center gap-2 rounded-full px-7 py-3 shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-600'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <SocialMedia />
            </motion.div>
        </section>
    );
};

export default Hero;