import { model, Schema } from "mongoose";
import { Inventory, products, Variant } from "./product.interface";

// ✅ Variant Schema
export const variantSchema = new Schema<Variant>({
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
export const inventorySchema = new Schema<Inventory>({
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
export const productSchema = new Schema<products>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
      unique:true
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
        validator: function (v: string[]) {
          return Array.isArray(v);
        },
        message: "Tags must be an array of strings",
      },
    },
    variants: {
      type: [variantSchema],
      default: [],
    },
    inventory: {
      type: inventorySchema,
      required: true,
    },
  },
  
);

// ✅ Product Model
export const productsModel = model<products>("Products", productSchema);
