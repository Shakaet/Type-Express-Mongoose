"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
exports.productsRouter = express_1.default.Router();
exports.productsRouter.post("/products", product_controller_1.CreateProducts);
exports.productsRouter.get("/products", product_controller_1.getAllProducts);
exports.productsRouter.get("/products/:id", product_controller_1.getSpecificProducts);
exports.productsRouter.put("/products/:productId", product_controller_1.updateProduct);
exports.productsRouter.delete("/products/:productId", product_controller_1.getSpecificdeletedProducts);
exports.productsRouter.get("/pro", product_controller_1.getsearchParamsProducts);
