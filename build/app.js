"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const utils_1 = require("./utils");
// const tienePermiso: boolean = true;
const app = (0, express_1.default)();
// Express settings
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname, "dashboards")));
//routes
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/dashboards/welcome.html"));
});
app.get("/midashboard", async (req, res) => {
    const puesto = req.query.puesto;
    const equipo = req.query.equipo;
    const ip = (0, utils_1.getIp)(req.socket.remoteAddress);
    console.log(`Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`);
    if (puesto && equipo && ip)
        (await (0, utils_1.hasPermission)(ip, puesto)) || true
            ? res.render("dashboard", { texto: "Este es un titulo", puesto, ip })
            : res
                .status(403)
                .sendFile(path_1.default.join(__dirname + "/dashboards/error-403.html"));
    else {
        res.sendFile(path_1.default.join(__dirname + "/dashboards/welcome.html"));
    }
});
app.get("*", (_req, res) => {
    res.status(404).sendFile(path_1.default.join(__dirname + "/dashboards/error-404.html"));
});
exports.default = app;
//# sourceMappingURL=app.js.map