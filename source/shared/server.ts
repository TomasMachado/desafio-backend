import { Tag } from "@/domain/tools/infra/typeorm/entities/tags";
import Tool from "@/domain/tools/infra/typeorm/entities/tool";
import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "mypassword",
  database: "desafio",
  synchronize: true,
  maxQueryExecutionTime: 3000,
  logging: true,
  entities: [Tool, Tag],
  subscribers: [],
  migrations: [],
});

appDataSource.initialize();
