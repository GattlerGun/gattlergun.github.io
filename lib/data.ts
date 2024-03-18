
import { sql } from "@vercel/postgres";
import { Project } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProjects() {
    noStore()
    try {
        const data = await sql`SELECT * FROM projects`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects data.');
    }
};

export async function fetchProjectById(id: string) {
    noStore()
    try {
        const data = await sql<Project>`
            SELECT
                id,
                title,
                description,
                img,
                pageUrl,
                gitUrl
            FROM projects
            WHERE projects.id = ${id};
        `;  

        const project = data.rows.map((project) => ({
            ...project
        }));

        return project[0];

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
    }
} 