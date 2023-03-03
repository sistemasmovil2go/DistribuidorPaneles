"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("./config/db.config");
const tbl_dashboard_1 = require("./entities/tbl_dashboard");
const app_1 = __importDefault(require("./app"));
const EXPRESS_PORT = 8083;
async function main() {
    await db_config_1.AppDataSource.initialize();
    console.log("Database Connected");
    // const dashboard = new Tbl_Dashboard();
    // dashboard.ip = "192.168.0.230";
    // dashboard.puesto = "69";
    // dashboard.equipo = "Sistemas";
    // await dashboard.save();
    const opciones = await tbl_dashboard_1.Tbl_Dashboard.find({ where: { puesto: "69" } });
    console.log(opciones);
    app_1.default.listen(EXPRESS_PORT, () => console.log(`Server running on port ${EXPRESS_PORT}`));
}
main();
//# sourceMappingURL=index.js.map