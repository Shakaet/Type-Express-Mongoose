"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getsearchParamsProducts = exports.getSpecificdeletedProducts = exports.updateProduct = exports.getSpecificProducts = exports.getAllProducts = exports.CreateProducts = void 0;
const product_service_1 = require("./product.service");
const CreateProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        console.log(product);
        const result = yield (0, product_service_1.createProductsToDB)(product);
        res.status(201).json({
            status: true,
            message: "data insert Successfully",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "data inserted failed",
            data: err.message
        });
        next();
    }
});
exports.CreateProducts = CreateProducts;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, product_service_1.getAllProductsToDB)();
        res.status(201).json({
            status: true,
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "data fetched failed",
            data: err.message
        });
        next();
    }
});
exports.getAllProducts = getAllProducts;
const getSpecificProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, product_service_1.getspecificProducts)(id);
        res.status(201).json({
            status: true,
            message: "specific Products fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "data fetched failed",
            data: err.message
        });
        next();
    }
});
exports.getSpecificProducts = getSpecificProducts;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        // console.log(id,req.body)
        const data = req.body;
        const result = yield (0, product_service_1.updateDatatoDb)(id, data);
        res.status(201).json({
            status: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "Product updated failed",
            data: err.message
        });
        next();
    }
});
exports.updateProduct = updateProduct;
const getSpecificdeletedProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield (0, product_service_1.getspecificDeletedProducts)(id);
        res.status(201).json({
            status: true,
            message: " Products Deleted successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "data Deleted failed",
            data: err.message
        });
        next();
    }
});
exports.getSpecificdeletedProducts = getSpecificdeletedProducts;
const getsearchParamsProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        const result = yield (0, product_service_1.getSearchParamsProducts)(search);
        res.status(201).json({
            status: true,
            message: "product serach successfully",
            data: result
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: "product search failed",
            data: err.message
        });
        next();
    }
});
exports.getsearchParamsProducts = getsearchParamsProducts;
