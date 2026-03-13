"use client";

import React from 'react';
import Link from 'next/link';
import s from './ProjectHeader.module.css';

import {ProjectComponentProps} from "@/interfaces/ProjectProps";

const ProjectHeader: React.FC<ProjectComponentProps> = ({
                                                         title,
                                                         description,
                                                         imagePath,
                                                         tags,
                                                         imagePosition = 'right',
                                                         imageShiftX,
                                                         imageShiftY,
                                                         sourceLink,
                                                         demoLink,
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
                <Link href="/#projects" className={s.backButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Projects</span>
                </Link>
                <div className={`${s.cardContainer} ${imagePosition === 'left' ? s.reverse : ''}`}>
                    <div className={s.textSection}>
                        <h1 className={s.title}>{title}</h1>
                        <p className={`mb-5 ${s.description}`}>{description}</p>
                        <a className={`d-flex align-content-center justify-content-center hover-scale ${s.contactButton}`} href={sourceLink} target="_blank" rel="noopener noreferrer">
                            <img
                                className={`${s.contactButtonSelf}`}
                                src={"/githubIcon.svg"}
                            />
                        </a>
                    </div>
                    <div className={s.imageSection}>
                        <div className={s.imageBg}>
                            {demoLink && (
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={imagePath}
                                            alt={title}
                                            className={s.image}
                                            style={{
                                                transform: `translateX(${imageShiftX ?? '0rem'}) translateY(${imageShiftY ?? '0rem'})`,
                                                width: '100%', // Ensure image respects boundaries
                                                height: 'auto',
                                            }}
                                        />
                                    </a>
                                )}
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