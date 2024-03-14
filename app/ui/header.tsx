import styles from '@/app/ui/header.module.scss'
import clsx from 'clsx'

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <h1 className={clsx(styles.header__title, 'title')}>Aleksei Rybkin</h1>
                    <p className={styles.header__description}>HTML coder</p>
                </div>
            </div>
        </header>
    )
}