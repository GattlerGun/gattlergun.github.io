import styles from '@/app/ui/projects/projects.module.scss'
import { projectsList } from '@/lib/projects/ProjectsList'
import clsx from 'clsx'
import Link from 'next/link'
import { Project } from '@/app/ui/projects/project'

export function Projects() {
    return (
        <section className={styles.projects} id='projects'>
            <div className='container'>
                <div className={styles.projects__inner}>
                    <h2 className={clsx(styles.projects__title, 'title')}>
                        My Projects
                    </h2>
                    <div className={styles.projects__items}>
                        {projectsList.slice(0, 3).map((project) => {
                            return (
                                <Link className={styles.projects__itemLink} key={project.id} href="#">
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        img={project.img}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                    {
                        projectsList.length > 3 &&
                        <Link href='#' className={styles.projects__moreLink}>
                            All projects...
                        </Link>
                    }
                </div>
            </div>
        </section>
    )
}