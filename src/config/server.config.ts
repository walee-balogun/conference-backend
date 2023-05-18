import { registerAs } from "@nestjs/config";

export default registerAs('server', () => ({
    protocol: process.env.PROTOCOL || 'http',
    host: process.env.HOST || '127.0.0.1',
    hostName: process.env.HOST_NAME || 'localhost',
    port: parseInt(process.env.PORT) || 3000,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    applicationName: process.env.APP_NAME || 'differential-route-fee',
    //ignoreEnvFile: parseStringToBoolean(process.env.IGNORE_ENV_FILE) || false
}));
