# 🛒 Product Management API



[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue)](https://www.typescriptlang.org/) 
[![Express](https://img.shields.io/badge/Express-4.x-orange)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-v6-green)](https://www.mongodb.com/) 
[![Mongoose](https://img.shields.io/badge/Mongoose-v7-red)](https://mongoosejs.com/)




---

## 📌 Project Overview

This is a **RESTful API for Product Management** built with **TypeScript, Express.js, and MongoDB**.  
It allows CRUD operations for products with support for **variants**, **inventory**, and **search functionality**.

- Fully typed with TypeScript
- Joi validation for request payloads
- Mongoose schemas for MongoDB
- Error handling with Express middlewares
- Search functionality for products

---

## 🚀 Features

- **Create Product**: Add new products with name, description, price, category, tags, variants, and inventory.
- **Read Products**: Get all products or a specific product by ID.
- **Update Product**: Update any product fields.
- **Delete Product**: Delete products by ID.
- **Search Products**: Search products by name using query parameters.
- **Validation**: Payloads validated with **Joi**.
- **Error Handling**: Centralized error handling and 404 routes.

---

## 🛠️ Technologies Used

| Technology | Description |
|------------|-------------|
| Node.js    | Runtime environment |
| TypeScript | Static typing |
| Express.js | Web framework |
| MongoDB    | Database |
| Mongoose   | ODM for MongoDB |
| Joi        | Schema validation |
| Cors       | Cross-Origin requests |

---

## 📂 Project Structure


```
📁 src/
├── 📂 app/products/
│   ├── 📄 product.controller.ts    # Request handlers & business logic
│   ├── 📄 product.interface.ts     # TypeScript interfaces
│   ├── 📄 product.model.ts         # Mongoose schemas & models
│   ├── 📄 product.route.ts         # Express routes
│   ├── 📄 product.service.ts       # Database operations
│   └── 📄 validate.joy.ts          # Joi validation schemas
├── 📂 config/
│   └── 📄 index.ts              # Database configuration
├── 📄 app.ts                       # Express app setup
└── 📄 server.ts                    # Server entry point

              
---

## 📋 API Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| 🟢 `POST` | `/products` | Create new product | ✅ Active |
| 🔵 `GET` | `/products` | Get all products | ✅ Active |
| 🔵 `GET` | `/products/:id` | Get product by ID | ✅ Active |
| 🟡 `PUT` | `/products/:productId` | Update product | ✅ Active |
| 🔴 `DELETE` | `/products/:productId` | Delete product | ✅ Active |
| 🔍 `GET` | `/pro?search=query` | Search products | ✅ Active |

---

## 📊 Data Models

### Product Schema
```typescript
interface Product {
  name: string;           // 2-100 chars, unique
  description: string;    // min 5 chars
  price: number;          // min 0
  category: string;       // required
  tags: string[];         // array of strings
  variants: Variant[];    // size, color, style variants
  inventory: Inventory;   // quantity & stock status
}
```

### Variant Schema
```typescript
interface Variant {
  type: "size" | "color" | "style";  // predefined types
  value: string;                     // variant value
}
```

### Inventory Schema
```typescript
interface Inventory {
  quantity: number;    // min 0
  inStock: boolean;    // stock status
}
```

---


## 📝 API Usage Examples

### 1. Create Product
```bash
POST /products
Content-Type: application/json

{
  "name": "Premium Gaming Headset",
  "description": "High-quality gaming headset with 7.1 surround sound",
  "price": 199.99,
  "category": "Electronics",
  "tags": ["gaming", "audio", "headset"],
  "variants": [
    { "type": "color", "value": "black" },
    { "type": "style", "value": "wireless" }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
```

**Response:**
```json
{
  "status": true,
  "message": "data insert Successfully",
  "data": {
    "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Premium Gaming Headset",
    "description": "High-quality gaming headset with 7.1 surround sound",
    "price": 199.99,
    "category": "Electronics",
    "tags": ["gaming", "audio", "headset"],
    "variants": [
      { "type": "color", "value": "black" },
      { "type": "style", "value": "wireless" }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    },
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 2. Get All Products
```bash
GET /products
```

**Response:**
```json
{
  "status": true,
  "message": "Products fetched successfully!",
  "data": [
    {
      "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
      "name": "Premium Gaming Headset",
      "price": 199.99,
      "category": "Electronics",
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  ]
}
```

### 3. Search Products
```bash
GET /pro?search=gaming
```

### 4. Update Product
```bash
PUT /products/65f1a2b3c4d5e6f7a8b9c0d1
Content-Type: application/json

{
  "price": 179.99,
  "inventory": {
    "quantity": 35,
    "inStock": true
  }
}
```

### 5. Delete Product
```bash
DELETE /products/65f1a2b3c4d5e6f7a8b9c0d1
```

---

## ✅ Validation Rules

### Product Validation
| Field | Type | Rules | Required |
|-------|------|-------|----------|
| `name` | String | 2-100 chars, unique | ✅ |
| `description` | String | min 5 chars | ✅ |
| `price` | Number | >= 0 | ✅ |
| `category` | String | any string | ✅ |
| `tags` | Array | string array | ❌ |
| `variants` | Array | variant objects | ❌ |
| `inventory` | Object | inventory object | ✅ |

### Variant Validation
- **type**: Must be `"size"`, `"color"`, or `"style"`
- **value**: Any non-empty string

### Inventory Validation  
- **quantity**: Number >= 0
- **inStock**: Boolean value

---

## 🚨 Error Handling

### Response Format
```json
{
  "status": false,
  "message": "Error description",
  "data": "Error details or validation errors"
}
```

### HTTP Status Codes
- `200` ✅ Success (GET, PUT, DELETE)
- `201` ✅ Created (POST)
- `404` ❌ Not Found / Operation Failed
- `400` ❌ Validation Error
- `500` ❌ Internal Server Error

### Common Errors

#### Validation Error
```json
{
  "status": false,
  "message": "data inserted failed",
  "data": "\"name\" is required"
}
```

#### Product Not Found
```json
{
  "status": false,
  "message": "data fetched failed",
  "data": "Product not found"
}
```

#### Duplicate Product Name
```json
{
  "status": false,
  "message": "data inserted failed",
  "data": "E11000 duplicate key error: name already exists"
}
```

---

## 🗄️ Database Configuration

### MongoDB Schema Features
- **Indexes**: Optimized for name and category searches
- **Validation**: Schema-level validation with custom messages
- **Unique Constraints**: Product names must be unique


---

## 🛠️ Development Tools

### Scripts
```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "clean": "rm -rf dist",
    "lint": "eslint src/**/*.ts",
    "test": "jest"
  }
}
```

### Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "joi": "^17.11.0",
    "typescript": "^5.2.2"
  },
  "devDependencies": {
    "@types/node": "^20.8.0",
    "@types/express": "^4.17.20",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1"
  }
}
```

---


## 🤝 Contributing


### Code Standards
- ✅ Use TypeScript for all new code
- ✅ Follow existing naming conventions
- ✅ Add proper error handling
- ✅ Include input validation
- ✅ Write descriptive commit messages
- ✅ Update documentation for new features

---


## 🏆 Acknowledgments

- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - Document-based database solution
- **Mongoose** - MongoDB object modeling for Node.js
- **Joi** - Data validation library
- **TypeScript** - Typed superset of JavaScript

---