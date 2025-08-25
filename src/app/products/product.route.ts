import  express  from 'express';

import { CreateProducts, getAllProducts, getSpecificProducts, updateProduct } from "./product.controller";



export const productsRouter = express.Router()

productsRouter.post("/products",CreateProducts)

productsRouter.get("/products",getAllProducts)

productsRouter.get("/products/:id",getSpecificProducts)

productsRouter.put("/products/:productId",updateProduct)