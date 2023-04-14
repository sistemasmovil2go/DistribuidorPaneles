import { DataSource } from "typeorm";
import { Tbl_Dashboard } from "../entities/tbl_dashboard";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "gestion_bd",
  synchronize: true,
  // logging: true,
  entities: [Tbl_Dashboard],
  // subscribers: [],
  // migrations: [],
});
