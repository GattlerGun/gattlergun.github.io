'use client'

import Image from "next/image";
import styles from '@/app/ui/nav.module.scss'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Burger } from "@/app/ui/burger";
import { useState } from "react";

export function Nav() {
    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Skills",
            href: "#",
        },
        {
            name: "About",
            href: "/about",
        }
    ];
    const pathname = usePathname();
    const [menuActive, setMenuActive] = useState(false);
    const listClass = menuActive ? `${styles.nav__listOpen} ${styles.nav__list}` : styles.nav__list;

    return (
        <>
            <nav className={styles.nav}>
                <div className="container">
                    <div className={styles.nav__inner}>
                        <Link href='/' className={styles.logo}>
                            <Image src="/logo.svg"
                                alt="Alexey Rybkin Logo"
                                className={styles.img}
                                width={84}
                                height={84}
                                priority
                            />
                        </Link>
                        <ul className={listClass}>
                            {links.map((link) => {
                                const linkClass = pathname === link.href ? styles.nav__linkCurrent : styles.nav__link
                                return (
                                    <li className={styles.nav__item} key={link.name}>
                                        <Link href={link.href} className={linkClass}
                                            onClick={() => { setMenuActive(false) }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                        <Burger active={menuActive} func={() => {
                            setMenuActive(!menuActive)
                        }} />
                    </div>
                </div>
            </nav>
        </>
    )
}