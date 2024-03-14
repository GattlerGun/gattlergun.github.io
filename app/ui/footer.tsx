import styles from '@/app/ui/footer.module.scss'
import Image from 'next/image';
import Link from 'next/link'

export function Footer() {
    const links = [
        {
            name: 'github',
            href: 'https://github.com/GattlerGun',
            img: '/github.svg'
        },
        {
            name: 'telegram',
            href: 'https://t.me/ThisNeTelega',
            img: '/telegram.svg'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footer__inner}>
                    <ul className={styles.footer__navList}>
                        <li className={styles.footer__navItem}>
                            <Link href='#' className={styles.footer__navLink}>Home</Link>
                        </li>
                        <li className={styles.footer__navItem}>
                            <Link href='#' className={styles.footer__navLink}>Projects</Link>
                        </li>
                    </ul>
                    <ul className={styles.footer__socials}>
                        {links.map((link) => {
                            return (
                                <li className={styles.footer__social} key={link.name}>
                                    <Link href={link.href} className={styles.footer__link} target='_blank'>
                                        <Image
                                            src={link.img}
                                            alt={link.name}
                                            className='svg-footer'
                                            width={48}
                                            height={48}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div >
                        <Image
                            src='/goTop.svg'
                            alt='Go Top'
                            className='svg-footer'
                            width={48}
                            height={48}
                        />
                    </div>
                </div>
            </div>

        </footer>
    )
}