"use client";

import React from 'react';
import Link from 'next/link';
import s from './ProjectHeader.module.css';

interface ProjectHeaderProps {
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
    imagePosition?: 'left' | 'right';
    imageShiftX?: string;
    imageShiftY?: string;
    children?: React.ReactNode;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
                                                         title,
                                                         description,
                                                         imagePath,
                                                         tags,
                                                         imagePosition = 'right',
                                                         imageShiftX,
                                                         imageShiftY,
                                                         children
                                                     }) => {
    const [isStuck, setIsStuck] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Roughly when the hero section scrolls out and tags hit the sticky position
            setIsStuck(window.scrollY > 350);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={s.headerWrapper}>
            <div className="container">
                <Link href="/projects" className={s.backButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Projects</span>
                </Link>
                <div className={`${s.cardContainer} ${imagePosition === 'left' ? s.reverse : ''}`}>
                    <div className={s.textSection}>
                        <h1 className={s.title}>{title}</h1>
                        <p className={s.description}>{description}</p>
                    </div>
                    <div className={s.imageSection}>
                        <div className={s.imageBg}>
                            <img
                                src={imagePath}
                                alt={title}
                                className={s.image}
                                style={{ transform: `translateX(${imageShiftX ?? '0rem'}) translateY(${imageShiftY ?? '0rem'})` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Bar */}
            <div className={`${s.stickyTagsBar} ${isStuck ? s.isStuck : ''}`}>
                <div className="container">
                    <div className={s.tagsContainer}>
                        {tags.map(tag => (
                            <span key={tag} className={s.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
};

export default ProjectHeader;