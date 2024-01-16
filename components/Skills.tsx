"use client";

import React from 'react'
import { useSectionInView } from './hooks/useSectionInView';
import SectionHeader from './helpers/SectionHeader';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInAnimationVariants } from '@/lib/styles';

const Skills = () => {
    const { ref } = useSectionInView('Skills');
    return (
        <section ref={ref} className='mt-28'>
            <SectionHeader urlId='skills' title='Skills' description='Tools and Technologies I am proficient in' />
            <div className='flex flex-wrap gap-20 items-center justify-center'>
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
                        >
                            <Image 
                            className='focus:scale-125 hover:scale-125 active:scale-110 transition' 
                            height={0} 
                            width={0} 
                            alt={skill.name} 
                            src={skill.icon} 
                            style={{width:'80px', height: "auto" }}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;