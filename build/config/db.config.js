"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const tbl_dashboard_1 = require("../entities/tbl_dashboard");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "gestion_bd",
    synchronize: true,
    // logging: true,
    entities: [tbl_dashboard_1.Tbl_Dashboard],
    // subscribers: [],
    // migrations: [],
});
//# sourceMappingURL=db.config.js.map