"use client";

import s from "./Header.module.css";
import Link from "next/link";
import React from "react";

export default function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // This scrolls to the element WITHOUT changing the URL
        }
    };

    return (
        <header>
            <nav className={`fixed-top ${s.nav}`} >
                <div className={`d-flex justify-content-between align-items-center mx-auto d-inline-block ${s.headerBar}`}>
                    <Link href="/" className={s.link}>Waylo.tech</Link>
                    <div className={`d-flex ${s.links}`}>
                        <a
                            href="#about"
                            onClick={(e) => handleScroll(e, "about")}
                            className={`${s.linkInfo}`}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleScroll(e, "projects")}
                            className={`${s.linkInfo}`}
                        >
                            Projects
                        </a>
                        <Link href="#contact" className={`${s.linkInfo}`}>Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}