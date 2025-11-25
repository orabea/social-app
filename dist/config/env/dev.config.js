"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.DevConfig = {
    PORT: process.env.PORT,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
};
//# sourceMappingURL=dev.config.js.map