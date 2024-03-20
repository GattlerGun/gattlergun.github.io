import { Metadata } from "next";
import styles from '@/app/ui/projects/projects.module.scss';
import clsx from "clsx";
import Link from "next/link";
import { Project } from "../ui/projects/project";
import { fetchProjects } from "@/lib/data";


export const metadata: Metadata = {
    title: `Projects | Alexey Rybkin`,
    description: "It,s projects by Aleksey Rybkin",
};

export default async function Page() {
    const projectsList = await fetchProjects();
    return (
        <section className={`${styles.projects} ${styles.projectsPage}`} id='projects'>
        <div className='container'>
            <div className={styles.projects__inner}>
                <h2 className={clsx(styles.projects__title, 'title')}>
                    My Projects
                </h2>
                <div className={styles.projects__items}>
                    {projectsList?.map((project) => {
                        return (
                            <Link className={styles.projects__itemLink} key={project.id} href={`/projects/project/${project.id}`}>
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    img={project.img}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    )
}