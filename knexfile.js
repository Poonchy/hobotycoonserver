require('dotenv').config()
module.exports = {
    development: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
        },
        pool: {
            min: 0,
            max: 10
        },
        ssl: {
            rejectUnauthorized: false
        },
        migrations: { directory: './data/migrations' },
        seeds: { directory: './data/seeds' },
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
        },
        pool: {
            min: 0,
            max: 10
        },
        ssl: {
            rejectUnauthorized: false
        },
        migrations: { directory: './data/migrations' },
        seeds: { directory: './data/seeds' },
    }

};
