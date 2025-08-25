import Joi from "joi";

// ✅ Variant Schema
const variantSchema = Joi.object({
  type: Joi.string()
    .valid("size", "color", "style")
    .required()
    .messages({
      "any.required": "Variant type is required",
      "any.only": "Variant type must be one of size, color, style",
    }),
  value: Joi.string().trim().required().messages({
    "any.required": "Variant value is required",
  }),
});

// ✅ Inventory Schema
const inventorySchema = Joi.object({
  quantity: Joi.number().min(0).required().messages({
    "any.required": "Quantity is required",
    "number.min": "Quantity cannot be negative",
  }),
  inStock: Joi.boolean().required().messages({
    "any.required": "inStock status is required",
  }),
});

// ✅ Product Schema
export const productValidator = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    "any.required": "Product name is required",
    "string.min": "Name must be at least 2 characters",
    "string.max": "Name cannot exceed 100 characters",
  }),
  description: Joi.string().trim().min(5).required().messages({
    "any.required": "Description is required",
    "string.min": "Description must be at least 5 characters",
  }),
  price: Joi.number().min(0).required().messages({
    "any.required": "Price is required",
    "number.min": "Price cannot be negative",
  }),
  category: Joi.string().trim().required().messages({
    "any.required": "Category is required",
  }),
  tags: Joi.array().items(Joi.string().trim()).default([]),
  variants: Joi.array().items(variantSchema).default([]),
  inventory: inventorySchema.required().messages({
    "any.required": "Inventory is required",
  }),
});
