"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { wallPictures } from '@/lib/data';
import Image from 'next/image';

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
            <div className='gallery'>
                {
                    wallPictures.map((wallPicture) => (
                        <div key={wallPicture.name} className='pics-container'>
                            <div className='pics'>
                                <Image
                                    src={wallPicture.image}
                                    alt={wallPicture.name}
                                    width={0}
                                    height={0}
                                    style={{ height: 'auto', width: '100%' }}
                                />
                                <div className='overlay text-gray-950 dark:text-white'>
                                    <p className='px-5'>
                                        {wallPicture.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Gallery;