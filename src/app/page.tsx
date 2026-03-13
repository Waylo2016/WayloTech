"use client";

import s from "./page.module.css";
import Header from "@/components/Header/Header";
import ProjectCard from "@/components/ProjectCard/ProjectCard"
import Link from "next/link";

import {projects} from "@/data/projects";
import {useEffect} from "react";



export default function Home() {
    // Inside your Home component:
    useEffect(() => {
        if (window.location.hash) {
            // Wait a brief moment for the browser to finish scrolling
            setTimeout(() => {
                window.history.replaceState(null, "", window.location.pathname);
            }, 1000);
        }
    }, []);

    return (
      <main className={"d-flex flex-column align-content-center"}>
          <Header />
          {/* Hero Section */}
          <section id={"Name"}
              className="min-vh-100 d-flex align-items-center justify-content-center px-3 pt-5">
              <div className={`text-center animate-fade-in ${s.heroContent}`}>

                  {/* SVG Icon */}
                  <div className="mb-4">
                      {/*import the WayloTech.svg*/}
                      <img
                          src="/WayloTech.svg"
                          alt="WayloTech logo"
                          width={96}
                          height={96}
                          />
                  </div>
                  {/* Name Header */}
                  <h1
                      id="hero-name"
                      className={`display-3 fw-bold mb-4 ${s.heroName}`}
                  >
                      Waylo
                  </h1>
                  {/* Tagline */}
                  <p
                      id="hero-tagline"
                      className={`fs-4 fw-light mb-5 ${s.heroTagline}`}
                  >
                      Full-time student HBO ICT at the The Hague University of Applied Sciences &amp; semi sys-admin
                  </p>
                  {/* CTA Buttons */}
                  <div className="d-flex justify-content-center gap-3">
                      <Link
                          href={"/#projects"}
                          className={`rounded-pill fw-medium hover-scale ${s.btnPrimary}`}
                      >
                          View Work
                      </Link>
                      <Link
                          href="MAILTO:waylo@waylo.tech"
                          className={`rounded-pill fw-medium hover-scale ${s.btnSecondary}`}
                      >
                          Get in Touch
                      </Link>
                  </div>
              </div>
          </section>

          {/* About Section */}
          <section id={"about"} className={"py-5 px-3"}>
          <div className={"container"}>
              <div className={"row align-items-center g-5"}>
                  <div className={"col-md-6"}>
                      <div className={s.animate}>
                        <span className={`d-block text-uppercase fw-semibold ls-widest mb-2 small ${s.aboutMe}`}>
                            About Me
                        </span>
                          <h2 id="about-title" className={`display-5 fw-bold mb-4 ${s.aboutTitle}`}>
                              Actually, programming is fun
                          </h2>
                          <p id="about-text" className={`lead mb-0 ${s.aboutText}`}>
                              Hi there! I’m a dedicated Information Technology student currently specializing in C# and .NET development.
                              Although I’m comfortable working with Java and other languages, I prefer the versatility and power of the Microsoft stack.
                              My goal is to bridge the gap between complex ideas and reliable software through clean, efficient code.
                              I’m an eager learner, always staying curious about the latest industry trends and ready to take the next step in my journey as a developer.
                          </p>
                      </div>
                  </div>
                  <div className={"col-md-6"}>
                      <img src="/csharpimage.jpg" className={`img-fluid ${s.imgprops}`} alt={"An image of C# code"}></img>
                  </div>
              </div>
          </div>
          </section>
          <section id={"projects"} className={`${s.projects}`}>
              <div className={s.projectPads}>
                  <div className={`mx-auto text-center ${s.projectsInfo}`}>
                      <div>
                    <span className={`text-uppercase d-block ${s.portfolio}`}>
                        Portfolio
                    </span>
                          <span className={`m-0 ${s.projectsTitle}`}>
                          Projects
                      </span>
                      </div>
                  </div>
              </div>
              <div className={"container"}>
                  <div className={"row g-4 justify-content-center"}>
                      {projects.map((project) => (
                          <div key={project.id} className={"col-12 col-md-6 col-lg-4"}>
                              <ProjectCard {...project} />
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          <section id={"contact"} className={"py-5 px-4"}>
              <div className={`mx-auto text-center ${s.contactInfo}`}>
                  <div>
                      <span className={`text-uppercase d-block ${s.contact}`}>
                          Contact
                      </span>
                      <h2 className={`mb-4 ${s.contactInfo}`}>
                          Send me a message
                      </h2>
                      <p className={`${s.aboutmsg}`}>
                          Want to reach me or check out my GitHub?
                      </p>
                      <div className={`d-flex justify-content-center gap-3`}>
                          <a className={`d-flex align-content-center justify-content-center hover-scale ${s.contactButton}`} href={"mailto:waylo@waylo.tech"}>
                              <img
                                  className={`${s.contactButtonSelf}`}
                                  src={"/MailVector.svg"}
                              />
                          </a>
                          <a className={`d-flex align-content-center justify-content-center hover-scale ${s.contactButton}`} href={"https://github.com/Waylo2016"} target={"_blank"}>
                              <img
                                  className={`${s.contactButtonSelf}`}
                                  src={"/githubIcon.svg"}
                              />
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
