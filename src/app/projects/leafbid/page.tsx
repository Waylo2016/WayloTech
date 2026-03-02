import Header from "@/components/Header/Header";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import s from "./page.module.css";
import {projects} from "@/data/projects";

export default function LeafbidPage() {
    // Find the project data by ID
    const project = projects.find(p => p.id === 'leafbid');

    // Fallback if project isn't found
    if (!project) return <div>Project not found</div>;
    return (
        <main>
            <Header />
            <ProjectHeader {...project}>
                <section className={s.projectBody}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h3 className={s.header}>Project Overview</h3>
                                <p>
                                    Here you can add your long-form content. Since the ProjectHeader
                                    handles the sticky tags, the rest of the page remains
                                    perfectly scrollable.
                                </p>

                                <h3 className={s.header}>The Challenge</h3>
                                <p>

                                </p>

                                {/* Add as many paragraphs as needed */}
                            </div>
                        </div>
                    </div>
                </section>
            </ProjectHeader>
        </main>
    );
}
