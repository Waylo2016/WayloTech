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

export const projects: Project[] = [
    {
        id: 'leafbid',
        title: 'Leafbid',
        description: 'A school project made on behalf of Floriday. The entire class was working on this as individual groups of around 4-5 students.',
        imagePath: '/LeafBid.svg',
        link: '/projects/leafbid',
        tags: ['UI', 'React', 'ASP.NET'],
        imagePosition: 'left',
        imageShiftX: '0.25rem',
        imageShiftY: '0.75rem',
        sourceLink: "https://github.com/MishaOpstal/LeafBid",
        demoLink: "https://leafbid.onthelink.nl"
    },

];