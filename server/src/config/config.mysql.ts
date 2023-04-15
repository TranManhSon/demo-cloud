import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //   synchronize: true,
  logging: false,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/db/migration/*.js'],
};

const configOrm = new DataSource(config);
export default configOrm;
