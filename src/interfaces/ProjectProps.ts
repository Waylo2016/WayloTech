export interface Project {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
    link: string;
    imagePosition?: 'left' | 'right';
    imageShiftX?: string;
    imageShiftY?: string;
    sourceLink?: string;
    demoLink?: string;
}

// A single merged interface for both ProjectCard and ProjectHeader
export interface ProjectComponentProps extends Project {
    children?: React.ReactNode; // Useful for the Header's extra content
}