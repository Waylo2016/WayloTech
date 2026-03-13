import Header from "@/components/Header/Header";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import s from "../ProjectPages.module.css";
import {projects} from "@/data/projects";

export default function LeafbidPage() {
    // Find the project data by ID
    const project = projects.find(p => p.id === 'Leafbid');

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
                                    Our challenge, presented by Floriday, was to conceptualize and execute a comprehensive digital solution.
                                    The core objective was to take the essence of the traditional flower auction, specifically the clock system used at Royal FloraHolland, and fully digitize it into a functional web application.
                                    This demanding project required us to deliver a complete, operational product for presentation to both Floriday stakeholders and our teachers.
                                </p>
                                <h1 className={`${s.header} pt-1`}>Technicals</h1>
                                <p className={`${s.paragraph} pt-1`}>
                                    The integrity of this project is built upon a robust technical foundation.
                                    We committed to utilizing ASP.NET for the back-end, leveraging its power to manage the API and ensure seamless database connectivity.
                                    This connection was meticulously handled using EF-Core for efficient data modeling.
                                    On the user-facing side, the application was crafted with a Next.Js front-end, utilizing Bootstrap for a consistent and responsive style.
                                </p>
                                <p className={`${s.paragraph} pt-1`}>
                                    For a secure and reliable user experience we implemented ASP.NET Identity to manage all user authentication.
                                    Furthermore, to maintain a professional standard in API development and testing, the entire orchestration process was documented and managed through Swagger.
                                </p>
                                <h1 className={`${s.header} pt-1`}>Challenges</h1>
                                <div id={"List of challenges"} className={` ${s.list}`}>
                                    <ul>
                                        <li>
                                            <a href={"#RealTimeCommunication"}>Real Time Communication</a>
                                        </li>
                                        <li>
                                            <a href={"#WebsiteDesign"}>Website Design</a>
                                        </li>
                                        <li>
                                            <a href={"#Next.JS"}>Using Next.JS</a>
                                        </li>
                                        <li>
                                            <a href={"#Interfaces"}>Changing everything to interfaces</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className={`${s.header2} pt-1`} id={"RealTimeCommunication"}>Real time communication</h2>
                                <p className={`${s.paragraph} pt-1`}>
                                    Our main struggle was thinking about keeping our code as optimized as possible (to our capabilities, of course).
                                    Due to the nature of the product being an auction site, we required communications nearly as fast as real time with no observable difference, even across networks.
                                    For this, we used SignalR, a framework made by Microsoft.
                                </p>
                                <p className={`${s.paragraph}`}>
                                    With this, we found out that some of the API endpoints were running too slow for real time communications.
                                    These endpoints had their queries written in LINQ and used EFCore for their execution.
                                    This was too slow for the project, as there was some time spent waiting for EFCore to translate the LINQ query into an SQL query.
                                    So, we wrote everything into raw SQL which is executed when the endpoint is called.
                                </p>
                                <p className={`${s.paragraph}`}>
                                    Of course, this endpoint can't just randomly execute any injected SQL.
                                    It only can take data in as numbers (an ID), thus the endpoint won't be able to execute any unwarranted SQL on the database
                                </p>
                                <h2 className={`${s.header2} pt-1`} id={"WebsiteDesign"}>Website Design</h2>
                                <p className={`${s.paragraph} pt-1`}>
                                    To design our website, we first decided to not use any kind of framework, and honestly? We were stupid in doing so.
                                    The website looked retro, to put it nicely. To put it less nicely, it was ugly.
                                    After feedback from our product owner (That being Floriday), we switched to using bootstrap instead of styling everything ourselves.
                                </p>
                                <p className={`${s.paragraph} pt-1`}>
                                    It resulted in a more minimalist and modern layout.
                                    Bootstrap still provided challenges, especially as we used Figma for designing the webpages.
                                    Figma doesn't come with easy to use Bootstrap components, so we had a lot of work trying to make everything work regardless.
                                </p>
                                <h2 className={`${s.header2} pt-1`} id={"Next.JS"}>Using Next.JS</h2>
                                <p className={`${s.paragraph} pt-1`}>
                                    We quickly decided on using the Next.JS framework for this project, as we were required to use React from the school.
                                    We went with Next.JS as opposed to just React as we didn't want to make a huge Single Page Application.
                                </p>
                                <p className={`${s.paragraph} pt-1`}>
                                    For me, it was a pretty steep learning curve to use Next.JS. I am not that much of a front-end developer.
                                    So for me it was already a huge improvement to learn proper HTML and CSS. But combine that with React/Next.JS?
                                    That was uncharted territory for me. A huge learning opportunity.
                                    School wanted us to rely on our groupmates to learn from each other and I took full use of that.
                                    My groupmates knew and know way more about React than I will ever know. So I did my best to soak up a smuch information as I could
                                </p>
                                <h2 className={`${s.header2} pt-1`} id={"Interfaces"}>Changing everything to interfaces</h2>
                                <p className={`${s.paragraph} pt-1`}>
                                    During the writing of Unit tests (using xUnit), we found out that the way we had written our code made writing tests more difficult.
                                    We had to rewrite our controllers, as they used to hold all the business logic, to be separate services that were called from the controllers.
                                    The controllers now only had a single method and maybe some helper code to help prepare the incoming data to be passed onto the services we made.
                                </p>
                                <p className={`${s.paragraph} pt-1`}>
                                    These services are implementations of interfaces, as this makes testing easier.
                                    That and code changes were easier to verify than before, as we now had proper tests to verify code remained functional after what can be considered some relatively huge code changes that we had to make.
                                    School liked to throw some wrenches in along the road, which caused us to have to rewrite code rather often
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ProjectHeader>
        </main>
    );
}
