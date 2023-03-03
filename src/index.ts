import { AppDataSource } from "./config/db.config";
import app from "./app";

const EXPRESS_PORT: number = 8083;

async function main() {
  await AppDataSource.initialize();

  console.log("Database Connected");

  // const dashboard = new Tbl_Dashboard();
  // dashboard.ip = "192.168.0.230";
  // dashboard.puesto = "69";
  // dashboard.equipo = "Sistemas";

  // await dashboard.save();

  app.listen(EXPRESS_PORT, () =>
    console.log(`Server running on port ${EXPRESS_PORT}`)
  );
}

main();
