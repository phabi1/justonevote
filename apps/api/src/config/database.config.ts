import { registerAs } from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type: 'postgres',
        url: process.env.DATABASE_URL
    }
})