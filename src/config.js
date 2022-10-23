import {config} from 'dotenv'
config()

export default {
    PORT: process.env.PORT || 5000,
    DB_HOST: process.env.DB_HOST || "",
    DB_NAME: process.env.DB_NAME || "",
    DB_USER: process.env.DB_USER || "",
    DB_PWD: process.env.DB_PWD || "",
}