"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MORGAN_MODE = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.DB_HOST = void 0;
exports.DB_HOST = (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : "localhost";
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_NAME = process.env.DB_NAME;
exports.MORGAN_MODE = process.env.MORGAN_MODE;
//# sourceMappingURL=constants.js.map