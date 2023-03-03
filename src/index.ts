import { AppDataSource } from "./config/db.config";
import { Tbl_Dashboard } from "./entities/tbl_dashboard";
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

  const opciones = await Tbl_Dashboard.find({ where: { puesto: "69" } });
  console.log(opciones);

  app.listen(EXPRESS_PORT, () =>
    console.log(`Server running on port ${EXPRESS_PORT}`)
  );
}

main();
