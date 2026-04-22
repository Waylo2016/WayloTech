export interface Project {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
    link: string;
    imagePosition?: 'left' | 'right';
    imageCardShiftX?: string;
    imageCardShiftY?: string;
    imageCardZoom?: string;
    imageHeaderShiftX?: string;
    imageHeaderShiftY?: string;
    imageHeaderZoom?: string;
    sourceLink?: string;
    demoLink?: string;
}

export const projects: Project[] = [

    {
        id: 'Leafbid',
        title: 'Leafbid',
        description: 'A school project made on behalf of Floriday. The entire class was working on this as individual groups of around 4-5 students.',
        imagePath: '/LeafBid.svg',
        link: '/projects/leafbid',
        tags: ['UI', 'Next.JS', 'ASP.NET'],
        imagePosition: 'left',
        imageCardShiftX: '-0.8rem',
        imageCardShiftY: '0.75rem',
        sourceLink: "https://github.com/MishaOpstal/LeafBid",
        demoLink: "https://leafbid.onthelink.nl"
    },
    // {
    //     id: 'Waylotech',
    //     title: 'WayloTech',
    //     description: 'A personal portfolio website made for me and by me.',
    //     imagePath: '/WayloTechWhite.svg',
    //     link: '/projects/waylotech',
    //     tags: ['UI', 'Next.JS', 'TypeScript'],
    //     imagePosition: 'left',
    //     imageCardShiftX: '-0.25rem',
    //     imageHeaderZoom: '2.5',
    //     sourceLink: "https://github.com/Waylo2016/WayloTech",
    //     demoLink: "https://waylo.tech"
    // }


];
