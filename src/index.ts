import { AppDataSource } from "./config/db.config";
import https from "https"
import fs from "fs";
import app from "./app";

const PORT: number = 8083;
const options = {
  key: fs.readFileSync('../selfsigned-certs/cert-key.pem'),
  cert: fs.readFileSync('../selfsigned-certs/cert.pem')
};


async function main() {
  await AppDataSource.initialize();

  console.log("Database Connected");

  //Para dev:
  // app.listen(EXPRESS_PORT, () =>
  //   console.log(`Server running on port ${EXPRESS_PORT}`)

  const server = https.createServer(options, app);

  server.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

main();
