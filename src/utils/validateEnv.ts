import { cleanEnv, port, str, bool, num } from 'envalid'

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DB_PORT: str(),
    DB_HOST: str(),
    DB_USERNAME: str(),
    DB_PASSWORD: str(),
    DB_LOGGING: bool(),
    DB_SYNCHRONIZE: bool(),
    DB_NAME: str(),
    // JAEGER_URL: str(),
    // ORIGIN_DOMAIN: str(),
    SERVICE_NAME: str(),
    API_VERSION: str(),
  })
}

export default validateEnv
