import Header from "@/components/Header/Header";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import s from "../ProjectPages.module.css";
import {projects} from "@/data/projects";

export default function WayloTechPage() {
    // Find the project data by ID
    const project = projects.find(p => p.id === 'Waylotech');

    //TODO: please yap more myself about the pricing issue

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
                                <h1 className={s.header}>Project Overview</h1>
                                <p className={s.paragraph}>
                                    This is a personal portfolio website made for me and by me.
                                    I wanted to show what I can do when I don't have a project looming over my head, being hung around like a gong by school
                                    forcing me to rewrite code that I wrote just a day before to have us learn how to code and force us to use unittests.
                                    This isn't a bad thing, but it was very tiring to have to slog through.
                                    This website i showcases my projects, skills, and experiences.
                                    The website is built using Next.js and TypeScript, providing a modern and responsive user interface.
                                </p>
                                <p className={s.paragraph}>
                                    The biggest thing, for me, was buying out a domain. It was quite a daunting quest to find a satisfactory domain, hah!
                                    But finally, I have one I am satisfied with. Then was setting up actual hosting, as I only bought me a domain.
                                    First I went with Microsoft Azure, but for reasons I will go into later, I am now comfortably hosting a VPS in the cloud somewhere.
                                </p>
                                <h1 className={s.header}>Challenges</h1>

                                <div id={"List of challenges"} className={` ${s.list}`}>
                                    <ul>
                                        <li>
                                            <a href={"#Pricing"}>Pricing</a>
                                        </li>
                                        <li>
                                            <a href={"#WebsiteDesign"}>Website Design</a>
                                        </li>
                                        <li>
                                            <a href={"#Next.JS"}>Using Next.JS (again!)</a>
                                        </li>
                                        <li>
                                            <a href={"#DNSandN"}>Struggling with a few DNS issues (and some networks)</a>
                                        </li>
                                        <li>
                                            <a href={"#Nginx"}>Learning to use Nginx</a>
                                        </li>
                                    </ul>
                                </div>

                                <h2 className={s.header2} id={"Pricing"}>Pricing</h2>
                                <p className={s.paragraph}>
                                    As hinted to earlier, pricing was a real issue for me.
                                    First I was using Azure for web hosting, but that cost me a whopping 24 euro per month!
                                    To many this may not seem like a lot, but to me it truly is.
                                    I wanted to move off of that ASAP, but I also didn't want to open ports on my home network.
                                    While I do have a tailscale network, I will always be slightly paranoid.
                                    I'd rather not have my home network encroached upon!
                                    Even if I was hiding behind a few layers of security, like nginx and tailscale.
                                </p>
                                <p className={s.paragraph}>
                                    Even if doing it that way truly is the cheapest way, I will pay a bit extra to have a few extra layers of security.
                                    So now I "Self host" my website on a VPS somewhere in the cloud, said VPS only costing me 10 euros a month. That's a 14 euro save, which to me is huge!
                                    Instead of a relatively easy deployment using azure and github, I now emulate this deployment onto a container that I can access with Github actions.
                                    It is slightly more setup than the azure deployment pipeline, but it works just as good.
                                </p>
                                <p className={`${s.paragraph} pt-1`}>
                                    The deployment pipeline is also partly done in the cloud and partly locally hosted.
                                    I wanted to try and do the CD locally, as I am becoming quite the self-hosting enthusiast.
                                    The CI is still done in the cloud, but due to SSH constraints I wanted to host the CD locally, at least.
                                    This way I can have a bit more control over the deployment process itself and also have a bit more control over the security of said process.
                                    The CI I would also like to do locally, but first I'd have to do some investments in my local server stack.
                                </p>

                                <h2 className={s.header2} id={"WebsiteDesign"}>Website Design</h2>
                                <p className={s.paragraph}>
                                    For a while I was staring at a blank canvas. Both literally and figuratively. I didn't know where to start.
                                    I stared at a lot of websites that I knew had a theme I liked in some way or shape. (As you may have guessed, I might have a favorite color.. haha!)
                                    Eventually I settled on this design that you see now. The website I used to design this used Tailwind CSS, while i mostly use Bootstrap in this website.
                                    So the prototype looks slightly different than what I envisioned. And yet, I am still very happy with how it looks now.
                                </p>
                                <p className={s.paragraph}>
                                    What I struggled most with, in terms of web design, was efficiently using my components that I have created.
                                    As you might expect, I am not interested in manually adding in a new component for every new project I make myself or for school.
                                    Designing my website around this was a fun challenge! For example the headers up top that show the logo, a short description and a github/demo link
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ProjectHeader>
        </main>
    );
}
