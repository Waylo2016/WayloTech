import s from "./page.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";


export default function Home() {
  return (
      <main className={"d-flex flex-column align-content-center"}>
          <Header />

          {/* Hero Section */}
          <section className="min-vh-100 d-flex align-items-center justify-content-center px-3 pt-5">
              <div className="text-center animate-fade-in" style={{ maxWidth: '896px' }}>

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
                      className="display-3 fw-bold mb-4"
                      style={{ color: '#f0f6fc', letterSpacing: '-0.025em' }}
                  >
                      Waylo
                  </h1>

                  {/* Tagline */}
                  <p
                      id="hero-tagline"
                      className="fs-4 fw-light mb-5"
                      style={{ color: '#8b949e', letterSpacing: '0.05em' }}
                  >
                      Full-time student HBO ICT at the The Hague University of Applied Sciences &amp; semi sys-admin
                  </p>

                  {/* CTA Buttons */}
                  <div className="d-flex justify-content-center gap-3">
                      <Link
                          href="#projects"
                          className="btn rounded-pill fw-medium hover-scale"
                          style={{ backgroundColor: '#c084fc', color: '#1a0d2e', padding: '0.75rem 2rem', fontSize: '0.875rem' }}
                      >
                          View Work
                      </Link>
                      <Link
                          href="#contact"
                          className="btn rounded-pill fw-medium border hover-scale"
                          style={{ borderColor: '#6d28d9', color: '#f0f6fc', padding: '0.75rem 2rem', fontSize: '0.875rem' }}
                      >
                          Get in Touch
                      </Link>
                  </div>
              </div>
          </section>
      </main>
  );
}
