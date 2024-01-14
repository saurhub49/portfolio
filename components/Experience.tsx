"use client";

import React from 'react'
import SectionHeader from './helpers/SectionHeader';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/lib/data';
import { useSectionInView } from './hooks/useSectionInView';
import TimelineIcon from './helpers/TimelineIcon';

const Experience = () => {
    const { ref } = useSectionInView('Experience', 0.4);

    return (
        <section ref={ref} className=''>
            <SectionHeader urlId='experience' title='Experience' description='My journey in the industry so far' />
            <VerticalTimeline lineColor=''>
                {
                    experiences.map((experience) => (
                        <React.Fragment key={experience.id}>
                            <VerticalTimelineElement 
                            visible={true}
                            contentStyle={{
                                backgroundColor: '#f3f4f6',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3 rem 2rem'
                            }}
                            contentArrowStyle={{
                                borderRight: '0.4rem solid #93ca3af'
                            }}
                            date={experience.date}
                            icon={<TimelineIcon src={experience.icon} alt={experience.companyName} />}
                            iconStyle={{
                                background: experience.iconBg,
                                fontSize: '1.5rem',
                                padding: '12px'
                            }}
                            >
                                <h3 className='font-bold capitalize'>{experience.title}</h3>
                                <p className='pb-3 text-gray-500 !mt-0'>{experience.companyName}</p>
                                <ul className='list-disc list-inside'>
                                    {
                                        experience.points.map((point, index) => (
                                            <li key={index} className='mt-2'>
                                                {point}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
};

export default Experience;