"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPuesto = exports.getIp = exports.hasPermission = void 0;
const tbl_dashboard_1 = require("./entities/tbl_dashboard");
async function hasPermission(ip, puesto) {
    if (!puesto)
        return false;
    if (!ip)
        return false;
    const opciones = await tbl_dashboard_1.Tbl_Dashboard.find({ where: { puesto: puesto } });
    if (opciones.length === 0)
        return false;
    const db_ip = opciones[0].ip;
    const db_puesto = opciones[0].puesto;
    return ip === db_ip && puesto === db_puesto;
}
exports.hasPermission = hasPermission;
function getIp(ip) {
    if (ip === undefined)
        return null;
    const ipSep = ip.split(":");
    const longitud = ip.split(":").length;
    return ipSep[longitud - 1];
}
exports.getIp = getIp;
function getPuesto(puesto) {
    if (puesto === undefined)
        return null;
    const longitud = puesto.length;
    return puesto.slice(longitud - 3);
}
exports.getPuesto = getPuesto;
//# sourceMappingURL=utils.js.map