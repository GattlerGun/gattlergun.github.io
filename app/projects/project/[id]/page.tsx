import { fetchProjectById } from "@/lib/data";
import Link from "next/link";
import styles from '@/app/ui/projects/project.module.scss'
import Image from "next/image";
import { SkillsList } from "@/lib/skills/SkillsList";
import { Skill } from "@/app/ui/skills/skill";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: `Project | Alexey Rybkin`,
    description: "It,s my project",
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const project = await fetchProjectById(id);
    return (
        <main>
            <section className={`${styles.project} ${styles.projectsPage}`}>
                <div className="container">
                    <div className={styles.project__inner}>
                        <h1 className={`${styles.project__title} title`}>
                            {project.title}
                        </h1>
                        <div className={styles.project__img}>
                            <Image
                                className={styles.project__border}
                                src={project.img}
                                alt={project.title}
                                layout="responsive"
                                width={854}
                                height={480}
                            />
                        </div>
                        <ul className={styles.project__list}>
                            {SkillsList.map((skill) => {
                                return (
                                    <li className={styles.project__item} key={skill.id}>
                                        <Skill title={skill.title} img={skill.img} />
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        <p className={styles.project__description}> {project.description} </p>
                        <div className={styles.project__links}>
                            <Link className={styles.project__link} target="_blank" href={project.giturl}>Go to git</Link>
                            <Link className={styles.project__link} target="_blank" href={project.pageurl}>Go to project page</Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}