"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = require("./config/db.config");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("./app"));
const PORT = 8083;
const options = {
    key: fs_1.default.readFileSync('../selfsigned-certs/cert-key.pem'),
    cert: fs_1.default.readFileSync('../selfsigned-certs/cert.pem')
};
async function main() {
    await db_config_1.AppDataSource.initialize();
    console.log("Database Connected");
    //Para dev:
    // app.listen(EXPRESS_PORT, () =>
    //   console.log(`Server running on port ${EXPRESS_PORT}`)
    const server = https_1.default.createServer(options, app_1.default);
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
main();
//# sourceMappingURL=index.js.map