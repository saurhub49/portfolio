"use client";

import React from 'react';
import { useSectionInView } from './hooks/useSectionInView';
import SectionHeader from './helpers/SectionHeader';
import { projects } from '@/lib/data';
import ProjectCard from './helpers/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    const { ref } = useSectionInView('Projects', 0.3);
    return (
        <motion.section
            ref={ref}
            className='flex flex-col gap-10 mt-32'
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
            <SectionHeader urlId='projects' title='Projects' description='The Tapestry of My Work' />
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))
            }
        </motion.section>
    );
};

export default Projects;