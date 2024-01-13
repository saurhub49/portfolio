"use client";

import { profile } from '@/lib/assets';
import { heroData, socials } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className='text-center md:px-48'>
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
                <a download href='/resume.pdf' className='group bg-white flex items-center gap-2 rounded-full px-7 py-3 shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <div className='flex flex-row gap-2 pt-2 sm:pt-0'>
                    {
                        socials.map((social) => (
                            <a key={social.name} href={social.link} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                                {React.createElement(social.icon, {
                                    style: { width: '24px', height: '24px' }
                                })}
                            </a>
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;