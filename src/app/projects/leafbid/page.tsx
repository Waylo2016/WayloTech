import s from "@/app/projects/page.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Projects - Under Construction",
};

export default function Projects() {
    return (
        <main className={"d-flex flex-column align-content-center"}>
            <Header />
            <section id={"UnderConstruction"}
                     className="min-vh-100 d-flex align-items-center justify-content-center px-3 pt-5">
                <div className={`text-center animate-fade-in ${s.heroContent}`}>
                    <div className="mb-4">
                        <img
                            src="/WayloTech.svg"
                            alt="WayloTech logo"
                            width={96}
                            height={96}
                        />
                    </div>
                    <h1
                        id="hero-name"
                        className={`display-3 fw-bold mb-4 ${s.heroName}`}
                    >
                        Projects
                    </h1>
                    <p
                        id="hero-tagline"
                        className={`fs-4 fw-light mb-5 ${s.heroTagline}`}
                    >
                        This page is currently under construction for your reading pleasure.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link
                            href="/"
                            className={`rounded-pill fw-medium hover-scale ${s.btnPrimary}`}
                        >
                            Back Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
