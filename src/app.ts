import express from "express";
import path from "path";
import morgan from "morgan";
import { checkPermission } from "./middlewares/permission";
import { MORGAN_MODE } from "./constants";

const app = express();

// Express settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan(MORGAN_MODE as any));
app.use(express.static(path.join(__dirname, "public")));
// app.use(checkPermission);

//routes
app.get("/", (_req, res) => res.render("welcome"));

app.get("/midashboard", checkPermission, async (_req, res) => {
  const puesto = res.locals.puesto;
  res.locals.hasPermission
    ? res.render("dashboard", { puesto })
    : res.status(403).render("error-403");
});

app.get("*", (_req, res) => {
  res.status(404).render("error-404");
});

export default app;
