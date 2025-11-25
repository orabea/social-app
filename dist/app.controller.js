"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstap = bootstap;
const modules_1 = require("./modules");
const auth_controller_js_1 = __importDefault(require("./modules/auth/auth.controller.js"));
const connection_js_1 = require("./DB/connection.js");
function bootstap(app, express) {
    (0, connection_js_1.connectDB)();
    app.use(express.json());
    // auth
    app.use("/auth", auth_controller_js_1.default);
    // user
    // post
    app.use("/post", modules_1.postRouter);
    // comment
    app.use("/comment", modules_1.commentRouter);
    // message
    app.use("/{*dummy}", (req, res, next) => {
        return res.status(404).json({ message: "route not found", success: false });
    });
    app.use((error, _req, res, next) => {
        return res
            .status(error.statusCode || 500).
            json({
            message: error.message || 'Internal Server Error',
            success: false
        });
    });
}
//# sourceMappingURL=app.controller.js.map