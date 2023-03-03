import { DataSource } from "typeorm";
import { Tbl_Dashboard } from "../entities/tbl_dashboard";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost", //"176.184.2.10",
  port: 3306,
  username: "root", // "sistemas",
  password: "admin", // "lvns1cft"
  database: "gestion_bd", // "dashboards_bd"
  synchronize: true,
  // logging: true,
  entities: [Tbl_Dashboard],
  // subscribers: [],
  // migrations: [],
});
