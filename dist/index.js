"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_controller_js_1 = require("./app.controller.js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: './config/dev.env' });
const app = (0, express_1.default)();
const port = 3000;
(0, app_controller_js_1.bootstap)(app, express_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map