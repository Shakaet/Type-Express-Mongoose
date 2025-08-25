import express, { Request, Response } from "express"

export const app = express()
import cors from "cors"
import { productsRouter } from "./app/products/product.route"
// const port = 3000
app.use(express.json())
app.use(cors())





app.use("/api",productsRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


