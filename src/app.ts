import express from "express";
import path from "path";
import morgan from "morgan";
import { checkPermission } from "./middlewares/permission";

const app = express();

// Express settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
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

// app.get("/:role/autogestion/*", getRole, (_req, res) => {
//   res.sendFile(path.join(__dirname, "public/auto", "index.html"));
// });

app.get("*", (_req, res) => {
  res.status(404).render("error-404");
});

export default app;
