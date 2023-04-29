import { DataSource } from "typeorm";
import { Tbl_Dashboard } from "../entities/tbl_dashboard";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../constants";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  // synchronize: true,
  // logging: true,
  entities: [Tbl_Dashboard],
  // subscribers: [],
  // migrations: [],
});
