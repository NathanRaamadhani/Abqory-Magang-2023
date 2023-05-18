"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_connection_string_1 = require("pg-connection-string");
exports.default = ({ env }) => {
    const config = env("DATABASE_URL") ? (0, pg_connection_string_1.parse)(env("DATABASE_URL")) : null;
    return {
        connection: {
            client: "postgres",
            connection: {
                host: config === null || config === void 0 ? void 0 : config.host,
                port: config === null || config === void 0 ? void 0 : config.port,
                database: config === null || config === void 0 ? void 0 : config.database,
                user: config === null || config === void 0 ? void 0 : config.user,
                password: config === null || config === void 0 ? void 0 : config.password,
                ssl: false,
            },
            debug: false,
        },
    };
};
