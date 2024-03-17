
import styles from '@/app/ui/nav.module.scss';

export function Burger({active, func} : {active: boolean, func: any}) {
    const burgerClass = active ? `${styles.burger} ${styles.burgerActive}` : styles.burger;
    return(
        <button className={burgerClass} onClick={func}>
            <span></span>
        </button>
    )
}