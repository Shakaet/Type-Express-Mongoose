"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsModel = exports.productSchema = exports.inventorySchema = exports.variantSchema = void 0;
const mongoose_1 = require("mongoose");
// ✅ Variant Schema
exports.variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, "Variant type is required"],
        trim: true,
        enum: ["size", "color", "style"], // predefined variant types
    },
    value: {
        type: String,
        required: [true, "Variant value is required"],
        trim: true,
    },
});
// ✅ Inventory Schema
exports.inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity cannot be negative"], // validation
    },
    inStock: {
        type: Boolean,
        required: [true, "inStock status is required"],
        default: false,
    },
});
// ✅ Product Schema
exports.productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [100, "Name cannot exceed 100 characters"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
        minlength: [5, "Description must be at least 5 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
        validate: {
            validator: function (v) {
                return Array.isArray(v);
            },
            message: "Tags must be an array of strings",
        },
    },
    variants: {
        type: [exports.variantSchema],
        default: [],
    },
    inventory: {
        type: exports.inventorySchema,
        required: true,
    },
});
// ✅ Product Model
exports.productsModel = (0, mongoose_1.model)("Products", exports.productSchema);
