"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const tbl_dashboard_1 = require("../entities/tbl_dashboard");
const constants_1 = require("../constants");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: constants_1.DB_HOST,
    port: 3306,
    username: constants_1.DB_USER,
    password: constants_1.DB_PASSWORD,
    database: constants_1.DB_NAME,
    // synchronize: true,
    // logging: true,
    entities: [tbl_dashboard_1.Tbl_Dashboard],
    // subscribers: [],
    // migrations: [],
});
//# sourceMappingURL=db.config.js.map