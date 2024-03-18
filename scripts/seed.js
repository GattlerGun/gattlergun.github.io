const { db } = require('@vercel/postgres');
const {
    users,
    projects,
} = require('./../lib/placeholder-data.js')
const bcrypt = require('bcrypt');


async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

        console.log(`Created "users" table`);


        const insertedUsers = await Promise.all(
            users?.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedProjects(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
            Create TABLE IF NOT EXISTS projects (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                title VARCHAR(64) NOT NULL,
                description VARCHAR(255),
                img VARCHAR(255) NOT NULL,
                pageUrl VARCHAR(255) NOT NULL,
                gitUrl VARCHAR(255) NOT NULL,
                date DATE NOT NULL
            );
        `;
        console.log(`Created "projects" table`);
        const insertedProjects = await Promise.all(
            projects?.map(
                (project) => client.sql`
                    INSERT INTO projects (id, title, description, img, pageUrl, gitUrl, date)
                    VALUES (${project.id}, ${project.title}, ${project.description}, 
                        ${project.img}, ${project.pageUrl}, ${project.gitUrl}, ${project.date})
                    ON CONFLICT (id) DO NOTHING;
                `,
            ),
        );
        console.log(`Seeded ${insertedProjects.length} projects`);
        return {
            createTable,
            projects: insertedProjects,
        }
    } catch (error) {
        console.error('Error seeding projects:', error);
        throw error;
    };
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedProjects(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});