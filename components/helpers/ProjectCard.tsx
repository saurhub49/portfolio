import React from 'react';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { name, description, image, tags, link, extraLink } = props;
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
                <h3 className='capitalize text-2xl font-medium mb-4'>
                    {name}
                </h3>
                <p className='mb-4'>
                    {description}
                </p>
                <div className='flex flex-wrap mb-3'>
                    {
                        tags.map((tag) => (
                            <div
                                key={tag.name}
                                className="inline-flex items-center border border-black w-fit rounded-full py-1 px-4 mr-2 mb-2 text-sm"
                                style={{ background: tag.color }}
                            >
                                <span className="text-center w-full">{tag.name}</span>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-wrap gap-3'>
                    <a href={link} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-lg border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                        {React.createElement(BsGithub, {
                            style: { width: '28px', height: '28px', color: '#333' }
                        })}
                    </a>
                    {extraLink &&
                        <a href={extraLink} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-lg border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                            {React.createElement(BsGithub, {
                                style: { width: '28px', height: '28px', color: '#333' }
                            })}
                        </a>}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;