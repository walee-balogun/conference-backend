import { registerAs } from "@nestjs/config";
import mongoDbConfig from "./mongo-db.config";

export default registerAs('database', () => ({
    mongo: mongoDbConfig()
}))