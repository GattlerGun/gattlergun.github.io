'use client'

import Image from "next/image";
import styles from '@/app/ui/nav.module.scss'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
                        <ul className={styles.nav__list}>
                            {links.map((link) => {
                                return (
                                    <li className={styles.nav__item} key={link.name}>
                                        <Link href={link.href} className={clsx(styles.nav__link,
                                            { 'nav__link--current' : pathname === link.href,}
                                            ,
                                        )}>
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}