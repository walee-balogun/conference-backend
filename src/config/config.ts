import databaseConfig from "./database.config";
import serverConfig from "./server.config";

export default () => ({
    server: serverConfig(),
    database: databaseConfig(),
})