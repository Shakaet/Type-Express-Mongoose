"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidator = void 0;
const joi_1 = __importDefault(require("joi"));
// ✅ Variant Schema
const variantSchema = joi_1.default.object({
    type: joi_1.default.string()
        .valid("size", "color", "style")
        .required()
        .messages({
        "any.required": "Variant type is required",
        "any.only": "Variant type must be one of size, color, style",
    }),
    value: joi_1.default.string().trim().required().messages({
        "any.required": "Variant value is required",
    }),
});
// ✅ Inventory Schema
const inventorySchema = joi_1.default.object({
    quantity: joi_1.default.number().min(0).required().messages({
        "any.required": "Quantity is required",
        "number.min": "Quantity cannot be negative",
    }),
    inStock: joi_1.default.boolean().required().messages({
        "any.required": "inStock status is required",
    }),
});
// ✅ Product Schema
exports.productValidator = joi_1.default.object({
    name: joi_1.default.string().trim().min(2).max(100).required().messages({
        "any.required": "Product name is required",
        "string.min": "Name must be at least 2 characters",
        "string.max": "Name cannot exceed 100 characters",
    }),
    description: joi_1.default.string().trim().min(5).required().messages({
        "any.required": "Description is required",
        "string.min": "Description must be at least 5 characters",
    }),
    price: joi_1.default.number().min(0).required().messages({
        "any.required": "Price is required",
        "number.min": "Price cannot be negative",
    }),
    category: joi_1.default.string().trim().required().messages({
        "any.required": "Category is required",
    }),
    tags: joi_1.default.array().items(joi_1.default.string().trim()).default([]),
    variants: joi_1.default.array().items(variantSchema).default([]),
    inventory: inventorySchema.required().messages({
        "any.required": "Inventory is required",
    }),
});
