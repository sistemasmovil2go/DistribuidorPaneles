import express from "express";
import path from "path";
import morgan from "morgan";
import { getIp, getPuesto, hasPermission } from "./utils";

const app = express();

// Express settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "/public/welcome.html"));
});

app.get("/midashboard", async (req, res) => {
  const puesto = getPuesto(req.query.puesto as string);
  const equipo = req.query.equipo;
  const ip = getIp(req.socket.remoteAddress);

  console.log(`Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`);
  if (puesto && equipo && ip)
    (await hasPermission(ip, puesto))
      ? res.render("dashboard", { puesto, ip })
      : res.status(403).render("error-403");
  else {
    res.render("welcome");
  }
});

app.get("*", (_req, res) => {
  res.status(404).render("error-404");
});

export default app;
