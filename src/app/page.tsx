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
                          href="#projects"
                          className={`rounded-pill fw-medium hover-scale ${s.btnPrimary}`}
                      >
                          View Work
                      </Link>
                      <Link
                          href="#contact"
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
                      <div className={"animate-slide-up"}>
                        <span className={`d-block text-uppercase fw-semibold ls-widest mb-2 small ${s.aboutMe}`}>
                            About Me
                        </span>
                          <h2 id="about-title" className={`display-5 fw-bold mb-4 ${s.aboutTitle}`}>
                              Actually, programming is fun
                          </h2>
                          <p id="about-text" className={`lead mb-0 ${s.aboutText}`}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec magna metus, aliquam nec sodales nec, imperdiet at massa.
                              Nunc eu lacinia felis. Curabitur cursus, risus pulvinar bibendum ultrices, libero urna tempus nisi, a condimentum nunc ex quis enim.
                              Donec urna massa, blandit eget laoreet a, ultricies eget leo.
                              Phasellus et dui mi. Nam eget metus id nisi volutpat blandit.
                              Ut vitae erat maximus elit imperdiet tempor.
                              Sed hendrerit, arcu ut volutpat porta, massa metus luctus ligula, vitae facilisis dolor ex quis arcu.
                              Pellentesque rutrum lorem urna, nec molestie arcu cursus sollicitudin.
                              Quisque nec sapien sollicitudin, ultricies lectus non, venenatis felis.
                              Sed ultrices, purus eu bibendum tristique, dolor turpis aliquam sem, et suscipit neque massa eget ipsum.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          </section>
      </main>
  );
}
