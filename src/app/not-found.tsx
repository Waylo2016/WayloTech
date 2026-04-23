// app/not-found.tsx
import s from "./not-found.module.css"; // or "./ProjectPages.module.css" if you prefer
import Header from "@/components/Header/Header";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className={"d-flex flex-column align-content-center"}>
            <Header />
            <section
                id={"NotFound"}
                className="min-vh-100 d-flex align-items-center justify-content-center px-3 pt-5"
            >
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
                        Page not found
                    </h1>
                    <p
                        id="hero-tagline"
                        className={`fs-4 fw-light mb-5 ${s.heroTagline}`}
                    >
                        The page you're trying to visit does NOT exist buddy, please check the URL or try again later.
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