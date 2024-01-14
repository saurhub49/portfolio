"use client";

import React from 'react';
import { useSectionInView } from './hooks/useSectionInView';
import SectionHeader from './helpers/SectionHeader';
import { projects } from '@/lib/data';
import ProjectCard from './helpers/ProjectCard';

const Projects = () => {
    const { ref } = useSectionInView('Skills');
    return (
        <section ref={ref} className='flex flex-col gap-10'>
            <SectionHeader urlId='projects' title='Projects' description='What work have I done' />
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))
            }
        </section>
    );
};

export default Projects;