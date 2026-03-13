import Header from "@/components/Header/Header";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import s from "../ProjectPages.module.css";
import {projects} from "@/data/projects";

export default function WayloTechPage() {
    // Find the project data by ID
    const project = projects.find(p => p.id === 'Waylotech');

    // Fallback if project isn't found
    if (!project) return <div>Project not found</div>;
    return (
        <main>
            <Header />
            <ProjectHeader {...project}>
                <section className={s.projectBody}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <h1 className={`${s.header}`}>Project Overview</h1>
                                <p className={`${s.paragraph} pt-1`}>
                                    This is a personal portfolio website made for me and by me.
                                    I wanted to show what I can do when I don't have a project looming over my head, being hung around like a gong by school
                                    forcing me to rewrite code that I wrote just a day before to have us learn how to code and force us to use unittests.
                                    This isn't a bad thing, but it was very tiring to have to slog through.
                                    This website i showcases my projects, skills, and experiences.
                                    The website is built using Next.js and TypeScript, providing a modern and responsive user interface.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ProjectHeader>
        </main>
    );
}
