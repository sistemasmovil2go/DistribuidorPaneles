"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
// Express settings
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//routes
app.get("/", (_req, res) => res.render("welcome"));
app.get("/midashboard", async (req, res) => {
    const puesto = req.query.puesto;
    const db_puesto = (0, utils_1.getPuesto)(puesto);
    const equipo = req.query.equipo;
    const ip = (0, utils_1.getIp)(req.socket.remoteAddress);
    console.log(`Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`);
    if (db_puesto && equipo && ip)
        (await (0, utils_1.hasPermission)(ip, db_puesto))
            ? res.render("dashboard", { puesto, ip })
            : res.status(403).render("error-403");
    else {
        res.render("welcome");
    }
});
app.get("/autogestion/*", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public/auto', 'index.html'));
});
app.get("*", (_req, res) => {
    res.status(404).render("error-404");
});
exports.default = app;
//# sourceMappingURL=app.js.map