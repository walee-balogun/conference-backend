import { registerAs } from "@nestjs/config";

export default registerAs('mongo', () => ({
    type: 'mongodb',
    host: process.env.MONGO_DB_HOST || '',
    hostname: process.env.MONGO_DB_HOST_NAME || '',
    port: parseInt(process.env.MONGO_DB_PORT, 10) || 27017,
    username: process.env.MONGO_DB_USERNAME || '',
    password: process.env.MONGO_DB_PASSWORD || '',
    database: process.env.MONGO_DB_DATABASE_NAME || '',
    synchronize: true,
}));