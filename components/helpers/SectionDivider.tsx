"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <motion.div
            className="my-16 rounded-full bg-gray-200 dark:bg-opacity-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        >
            <div
                className="hidden h-16 w-1 sm:block"
            ></div>
        </motion.div>
    );
};

export default SectionDivider;