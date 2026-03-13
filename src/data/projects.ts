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

    //TODO: fix the damn alignment of the svg's. Maybe add in a second positioning item for the projectheaders?

    {
        id: 'Leafbid',
        title: 'Leafbid',
        description: 'A school project made on behalf of Floriday. The entire class was working on this as individual groups of around 4-5 students.',
        imagePath: '/LeafBid.svg',
        link: '/projects/leafbid',
        tags: ['UI', 'Next.JS', 'ASP.NET'],
        imagePosition: 'left',
        imageShiftX: '0rem',
        imageShiftY: '0.75rem',
        sourceLink: "https://github.com/MishaOpstal/LeafBid",
        demoLink: "https://leafbid.onthelink.nl"
    },
    {
        id: 'Waylotech',
        title: 'WayloTech',
        description: 'A personal portfolio website made for me and by me.',
        imagePath: '/WayloTechWhite.svg',
        link: '/projects/waylotech',
        tags: ['UI', 'Next.JS', 'TypeScript'],
        imagePosition: 'right',
        imageShiftX: '-0.25rem',
        sourceLink: "https://github.com/Waylo2016/WayloTech",
        demoLink: "https://waylo.tech"
    }


];