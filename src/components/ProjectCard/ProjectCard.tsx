import React from 'react';
import Link from 'next/link';
import s from './ProjectCard.module.css'

import {Project} from "@/interfaces/ProjectProps";

const ProjectCard: React.FC<Project> = ({
    title,
    description,
    imagePath,
    link,
    tags,
    imageCardShiftX,
    imageCardShiftY,
    imageCardZoom,
}) => {
    const CardWrapper = link ? Link : 'div';
    const wrapperProps = link
        ? {href: link, className: `text-decoration-none ${s.cardLink}`}
        : { className: s.cardContainer };

    return (
        <CardWrapper {...(wrapperProps as any)}>
            <article className={`card border-0 h-100 ${s.projectCard}`}>
                <div className={`${s.imageContainer} ratio ratio-16x9`}>
                    {imagePath? (
                        <img
                            src={imagePath}
                            alt={title}
                            className={s.projectImage}
                            style={{ transform: `translateX(${imageCardShiftX ?? '0rem'}) translateY(${imageCardShiftY ?? '0rem'}) scale(${imageCardZoom ?? '1'})` }}
                        />
                    ) : null}
                </div>
                <div className={`card-body p-4 `}>
                    <h3 className={`card-title h5 fw-bold mb-2 ${s.cardTitle}`}>{title}</h3>
                    <p className={`card-text small mb-3 ${s.description}`}>{description}</p>
                    {tags.length > 0 && (
                        <div className={"d-flex flex-wrap gap-2"}>
                            {tags.map((tag) => (
                                <span key={tag} className={`badge rounded-pill fw-medium ${s.tag}`}>{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </CardWrapper>
    );
};

export default ProjectCard;