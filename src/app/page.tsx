import s from "./page.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";


export default function Home() {
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
                          href="/projects"
                          className={`rounded-pill fw-medium hover-scale ${s.btnPrimary}`}
                      >
                          View Work
                      </Link>
                      <Link
                          href="/contact"
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
      </main>
  );
}
