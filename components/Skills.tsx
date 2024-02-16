"use client";

import React from 'react'
import { useSectionInView } from './hooks/useSectionInView';
import SectionHeader from './helpers/SectionHeader';
import { skillCategories } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInAnimationVariants } from '@/lib/styles';

const Skills = () => {
    const { ref } = useSectionInView('Skills');
    return (
        <section ref={ref} className='mt-32'>
            <SectionHeader urlId='skills' title='Skills' description='Tools and Technologies I am proficient in' />
            {
                skillCategories.map((category) => (
                    <div className='flex flex-col items-center justify-center mt-10 border border-gray-300 dark:border-gray-700 rounded-3xl p-4 shadow-lg dark:shadow-2xl bg-[#e2e8f0] dark:bg-gray-700' key={category.title}>
                        <p className='text-2xl italic'>{category.title}</p>
                        <hr className='mt-2 mb-4 w-full border border-gray-700 dark:border-gray-300' />
                        <div className='flex flex-wrap gap-20 items-center justify-center mt-1'>
                            {
                                category.technologies.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                        className='flex flex-col items-center justify-center gap-3 mt-3'
                                    >
                                        <Image
                                            className='focus:scale-125 hover:scale-125 active:scale-110 transition'
                                            height={0}
                                            width={0}
                                            alt={skill.name}
                                            src={skill.icon}
                                            style={{ width: 'auto', height: "80px" }}
                                        />
                                        <p className="flex items-center justify-center px-2 py-1 bg-white bg-opacity-80 border border-black/10 border-opacity-40 shadow-2xl rounded-3xl hover:scale-[1.10] active:scale-105 transition-all dark:bg-gray-950 min-w-24 max-w-28 text-center text-wrap cursor-default">
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            {/* <div className='flex flex-wrap gap-20 items-center justify-center'>
                {
                    skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            className='flex flex-col items-center justify-center gap-3'
                        >
                            <Image
                                className='focus:scale-125 hover:scale-125 active:scale-110 transition'
                                height={0}
                                width={0}
                                alt={skill.name}
                                src={skill.icon}
                                style={{ width: 'auto', height: "80px" }}
                            />
                            <p className="flex w-fit px-2 py-1 bg-white bg-opacity-80 border border-black/10 border-opacity-40 shadow-2xl rounded-3xl hover:scale-[1.10] active:scale-105 transition-all dark:bg-gray-950">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))
                }
            </div> */}
        </section>
    )
}

export default Skills;