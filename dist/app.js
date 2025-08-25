"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/products/product.route");
// const port = 3000
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api", product_route_1.productsRouter);
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
// // // catch all error
exports.app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "not found"
    });
});
// /// global error handler
exports.app.use((err, req, res) => {
    if (err) {
        // console.log(err)
        res.status(400).json({
            status: false,
            message: "soththing went wrong"
        });
    }
});
