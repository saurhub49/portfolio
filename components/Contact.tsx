"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/components/hooks/useSectionInView';
import SectionHeader from '@/components/helpers/SectionHeader';
import toast from 'react-hot-toast';
import SubmitButton from '@/components/helpers/SubmitButton';
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mt-32 text-center"
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
            <SectionHeader urlId='contact' title='Contact' description="Let's have a chat" />

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:saurabhmahajan854@gmail.com">
                saurabhmahajan854@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                id='contact-form'
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    const form: HTMLFormElement = document.getElementById('contact-form') as HTMLFormElement;
                    form?.reset();

                    toast.success("Email sent successfully!");
                }}
            >
                <label htmlFor="name" className="flex ml-2 mb-0.5 font-medium text-gray-500">
                    Name:
                </label>
                <input
                    className="h-14 mb-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={50}
                    placeholder="Your name"
                />

                <label htmlFor="email" className="flex ml-2 mb-0.5 font-medium text-gray-500">
                    Email:
                </label>
                <input
                    className="h-14 mb-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    id="email"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />


                <label htmlFor="message" className="flex ml-2 mb-0.5 font-medium text-gray-500">
                    Message:
                </label>
                <textarea
                    className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    id='message'
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitButton />
            </form>
        </motion.section>
    );
}

export default Contact