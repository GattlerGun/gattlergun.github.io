import styles from '@/app/ui/skills/skills.module.scss';
import Image from 'next/image';

export function Skill({title, img} : {title: string, img: any}) {
    return (
        <>
            <div className={styles.about__img}>
                <Image
                    className='svg-icon'
                    src={img}
                    alt={title}
                    width={48}
                    height={48}
                />
            </div>
            <p className={styles.about__text}>{title}</p>
        </>
    )
}