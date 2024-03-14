import clsx from "clsx";
import Image from "next/image";
import styles from "@/app/ui/skills/skills.module.scss";
import { SkillsList } from "@/lib/skills/SkillsList";

export function Skills() {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.about__inner}>
                    <h2 className={clsx(styles.about__title, 'title')}> My Skills</h2>
                    <ul className={styles.about__list}>
                        {SkillsList.map((skill) => {
                            return (
                                <li className={styles.about__item} key={skill.id}>
                                    <div className={styles.about__img}>
                                        <Image
                                            className='svg-icon'
                                            src={skill.img}
                                            alt={skill.title}
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <p className={styles.about__text}>{skill.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}