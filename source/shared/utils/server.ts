import Tool from "@/domain/tools/infra/typeorm/entities/tool";
import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  maxQueryExecutionTime: 3000,
  logging: true,
  entities: [Tool],
  subscribers: [],
  migrations: [],
});

appDataSource.initialize();
