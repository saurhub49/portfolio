"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { wallPictures } from '@/lib/data';
import Image, { StaticImageData } from 'next/image';
import { Tilt } from 'react-tilt';
import { twMerge } from 'tailwind-merge';

interface GalleryImageProps {
    image: StaticImageData;
    name: string;
    description: string;
    className: string;
}

const GalleryImage: React.FC<GalleryImageProps> = (props) => {
    const { image, name, description, className } = props;

    return (
        <div className={twMerge("relative group overflow-hidden rounded-lg", className)}>
            <motion.div
                variants={{
                    initial: {
                        opacity: 0,
                        y: 100,
                    },
                    animate: (index: number) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.2,
                        },
                    }),
                }}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                className="aspect-w-4 aspect-h-3">
                <Image
                    src={image}
                    alt={`Image ${name}`}
                    height={0}
                    width={0}
                    style={{ width: '400px', height: 'auto' }}
                    className="transition-opacity group-hover:opacity-80 group-active:opacity-80"
                />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-70 group-active:bg-opacity-70 transition-opacity">
                <p className="hidden group-hover:flex group-active:flex text-white text-center text-wrap text-sm px-2 max-w-full overflow-hidden">
                    {description}
                </p>
            </div>
        </div>
    )
}

const Gallery = () => {
    return (
        <motion.div
            className='whoami py-8 xl:px-48 max-w-full'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'tween',
                duration: 0.2
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                {wallPictures.map((wallPicture) => (
                    <React.Fragment key={wallPicture.name}>
                        <Tilt className='hidden lg:flex'>
                            <GalleryImage
                                name={wallPicture.name}
                                image={wallPicture.image}
                                description={wallPicture.description}
                                className=''
                            />
                        </Tilt>
                        <GalleryImage
                            key={wallPicture.name}
                            name={wallPicture.name}
                            image={wallPicture.image}
                            description={wallPicture.description}
                            className='flex lg:hidden'
                        />
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    )
}

export default Gallery;