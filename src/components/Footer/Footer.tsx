"use client";

import s from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {

    return (
       <footer className={`${s.footer}`}>
            <div className={`d-flex mb-3`}>
                <p id={"footer text"} className={`me-auto ${s.footerText}`}>
                    © WayloTech. All rights reserved.
                </p>
                <p id={"footer text host"} className={` ${s.footerText}`}>
                    <a
                        href={"https://ko-fi.com/arigaytor"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={s.kofiLink}
                    >
                        Hosting websites is expensive, help me support hosting all my projects!
                        <img
                        src={"/Ko-Fi/kofi_symbol.svg"}
                        className={s.kofi}
                        />
                    </a>
                </p>
            </div>
       </footer>
    );
}