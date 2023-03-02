import express from "express";
import path from "path";
import morgan from "morgan";
import { getIp, hasPermission } from "./utils";

// const tienePermiso: boolean = true;
const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "dashboards")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "/dashboards/welcome.html"));
});

app.get("/midashboard", async (req, res) => {
  const puesto = req.query.puesto as string;
  const equipo = req.query.equipo;
  const ip = getIp(req.socket.remoteAddress);

  console.log(`Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`);
  if (puesto && equipo && ip)
    (await hasPermission(ip, puesto))
      ? res.sendFile(path.join(__dirname + "/dashboards/dashboard.html"))
      : res
          .status(403)
          .sendFile(path.join(__dirname + "/dashboards/error-403.html"));
  else {
    res.sendFile(path.join(__dirname + "/dashboards/welcome.html"));
  }
});

app.get("*", (_req, res) => {
  res.status(404).sendFile(path.join(__dirname + "/dashboards/error-404.html"));
});

export default app;
