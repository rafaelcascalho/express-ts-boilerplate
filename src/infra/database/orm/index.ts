import { ConnectionOptions } from 'typeorm'

export const dbConnection: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE ? process.env.DB_SYNCHRONIZE === 'true' : false,
  logging: process.env.DB_LOGGING ? process.env.DB_LOGGING === 'true' : false,
  migrations: ['src/infra/database/migrations/**/*.ts'],
  subscribers: ['src/infra/database/orm/subscriber/**/*.ts'],
  entities: ['src/infra/database/orm/entities/*.entity.ts', 'dist/infra/database/entities/*.entity.js'],
}
