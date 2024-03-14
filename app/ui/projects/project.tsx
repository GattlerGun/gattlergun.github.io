import styles from '@/app/ui/projects/projects.module.scss'
import Image from 'next/image'

export function Project({ title, img, description }:
    {
        title: string,
        img: any,
        description: string
    }) {
    return (
        <div className={styles.projects__item}>
            <div className={styles.projects__img}>
                <Image
                    src={img}
                    alt={title}
                    width={280}
                    height={160}
                />
            </div>
            <h4 className={styles.projects__itemTitle}>
                {title}
            </h4>
            <p className={styles.projects__itemDescription}>
                {description}
            </p>
            <div className={styles.projects__itemBtn}> more... </div>
        </div>
    )
}