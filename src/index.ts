import * as dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./config/db.config";
import app from "./app";

const PORT: number = 8083;

async function main() {
  await AppDataSource.initialize();

  console.log("Database Connected");

  //Para dev:
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main();
