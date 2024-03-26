"use client";

import React from 'react'
import SectionHeader from './helpers/SectionHeader';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educations } from '@/lib/data';
import { useSectionInView } from './hooks/useSectionInView';
import TimelineIcon from './helpers/TimelineIcon';
import { useTheme } from '@/context/useTheme';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '@/lib/styles';

const Education = () => {
    const { ref } = useSectionInView('Education', 0.3);
    const { theme } = useTheme();

    return (
        <section ref={ref} className='mt-32'>
            <SectionHeader urlId='education' title='Education' description='Exploring My Educational Background' />
            <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={1}
            >
                <VerticalTimeline lineColor=''>
                    {
                        educations.map((education, index) => (
                            <React.Fragment key={education.id}>
                                <VerticalTimelineElement
                                    visible={true}
                                    contentStyle={{
                                        backgroundColor: theme === "light" ? "#e2e8f0" : "rgba(255, 255, 255, 0.05)",
                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                        textAlign: 'left',
                                        padding: '1.3 rem 2rem'
                                    }}
                                    contentArrowStyle={{
                                        borderRight: '0.4rem solid #93ca3af'
                                    }}
                                    date={education.date}
                                    icon={<TimelineIcon src={education.icon} alt={education.university} />}
                                    iconStyle={{
                                        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                        fontSize: '1.5rem',
                                        padding: '12px'
                                    }}
                                >
                                    <motion.div
                                        variants={{
                                            initial: {
                                                opacity: 0,
                                                x: index % 2 === 0 ? 50 : -50,
                                            },
                                            animate: (index: number) => ({
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    delay: 0.05 * index,
                                                },
                                            }),
                                        }}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index + 1}
                                    >
                                        <h3 className='font-bold capitalize'>{education.degree}</h3>
                                        <p className='pb-3 text-gray-500 !mt-0'>{education.university}</p>
                                        <p className='pb-3 text-gray-500 !mt-0'>{education.grade}</p>
                                        <ul className='list-disc list-inside'>
                                            {
                                                education.points.map((point, index) => (
                                                    <li key={index} className='mt-2'>
                                                        {point}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </motion.div>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
            </motion.div>
        </section>
    )
}

export default Education;