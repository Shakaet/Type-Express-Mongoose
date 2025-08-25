import  express  from 'express';

import { CreateProducts } from "./product.controller";



export const productsRouter = express.Router()

productsRouter.post("/products",CreateProducts)