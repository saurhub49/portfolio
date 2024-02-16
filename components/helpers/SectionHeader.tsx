"use client";

import React from 'react';
import { motion } from "framer-motion";

interface SectionHeaderProps {
    urlId: string;
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
    const { urlId, title, description } = props;
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center mb-8 px-14 sm:px-48 md:px-80"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <span id={urlId} className="uppercase text-3xl scroll-mt-48">{title}</span>
            <div className='w-12 h-1 bg-[#8266ff] my-2'></div>
            {description && <span className="text-gray-500">
                {description}
            </span>}
        </motion.div>
    );
};

export default SectionHeader;