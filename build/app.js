"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const permission_1 = require("./middlewares/permission");
const constants_1 = require("./constants");
const app = (0, express_1.default)();
// Express settings
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// Middlewares
app.use((0, morgan_1.default)(constants_1.MORGAN_MODE));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// app.use(checkPermission);
//routes
app.get("/", (_req, res) => res.render("welcome"));
app.get("/midashboard", permission_1.checkPermission, async (_req, res) => {
    const puesto = res.locals.puesto;
    res.locals.hasPermission
        ? res.render("dashboard", { puesto })
        : res.status(403).render("error-403");
});
app.get("*", (_req, res) => {
    res.status(404).render("error-404");
});
exports.default = app;
//# sourceMappingURL=app.js.map