import React from 'react';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { BsDisplay, BsGithub } from 'react-icons/bs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/useTheme';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { name, description, image, tags, link, repository, extraRepository } = props;
    const { theme } = useTheme();
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-shrink-0'>
                <Image alt='Project' src={image}
                    width={0}
                    height={0}
                    style={{ width: '700px', height: 'auto' }}
                />
            </div>
            <div className='flex flex-col items-center lg:items-start text-justify justify-center'>
                <div className='flex flex-row justify-between items-center mb-4 w-full'>
                    <h3 className='capitalize text-2xl font-medium'>
                        {name}
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                        {link &&
                            <a href={link} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-lg border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10'>
                                {React.createElement(BsDisplay, {
                                    style: { width: '16px', height: '16px', color: theme == 'light' ? '#333' : 'rgb(255 255 255 / 0.6)' }
                                })}
                            </a>}
                        <a href={repository} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-lg border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10'>
                            {React.createElement(BsGithub, {
                                style: { width: '16px', height: '16px', color: theme == 'light' ? '#333' : 'rgb(255 255 255 / 0.6)' }
                            })}
                        </a>
                        {extraRepository &&
                            <a href={extraRepository} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-lg border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10'>
                                {React.createElement(BsGithub, {
                                    style: { width: '16px', height: '16px', color: theme == 'light' ? '#333' : 'rgb(255 255 255 / 0.6)' }
                                })}
                            </a>}
                    </div>
                </div>
                <p className='mb-4'>
                    {description}
                </p>



                <div className='flex flex-wrap mb-3 items-center justify-center lg:items-start lg:justify-start'>
                    {
                        tags.map((tag) => (
                            <div
                                key={tag.name}
                                className="items-center border border-black w-fit rounded-full py-1 px-4 mr-2 mb-2 text-sm dark:text-gray-950"
                                style={{ background: tag.color }}
                            >
                                <span className="text-center w-full">{tag.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;