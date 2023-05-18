export interface Server {
    protocol: string;
    host: string;
    hostName: string;
    port: number;
    baseUrl: string;
    applicationName: string;
    ignoreEnvFile: boolean;
}