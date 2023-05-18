export interface MongoDB {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    name: string;
    synchronize: boolean;
}