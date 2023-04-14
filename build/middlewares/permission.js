"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRole = exports.checkPermission = void 0;
const utils_1 = require("../utils");
const USER_ROLES = ["lider", "asesor"];
async function checkPermission(req, res, next) {
    const puesto = req.query.puesto;
    const db_puesto = (0, utils_1.getPuesto)(puesto);
    const equipo = req.query.equipo;
    const ip = (0, utils_1.getIp)(req.socket.remoteAddress);
    console.log(` Puesto enviado: ${puesto}, equipo: ${equipo}, ip remota: ${ip}`);
    if (db_puesto && equipo && ip) {
        // req.hasPermission = await hasPermission(ip, db_puesto);
        res.locals.hasPermission = await (0, utils_1.hasPermission)(ip, db_puesto);
        res.locals.puesto = puesto;
        res.locals.equipo = equipo;
        next();
    }
    else {
        res.render("welcome");
    }
}
exports.checkPermission = checkPermission;
async function getRole(req, res, next) {
    const role = req.params.role;
    if (USER_ROLES.includes(role)) {
        res.locals.role = role;
        next();
    }
    else {
        res.status(404).render("error-404");
    }
}
exports.getRole = getRole;
//# sourceMappingURL=permission.js.map