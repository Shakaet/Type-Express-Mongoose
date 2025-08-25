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


// // // catch all error
app.use((req:Request, res:Response) => {
  res.status(404).json({
    status: false,
    message: "not found"
  });
});

// /// global error handler

app.use((err:unknown,req:Request,res:Response)=>{
  if(err){
    // console.log(err)

    res.status(400).json({
      status:false,
      message:"soththing went wrong"
    })
  }
})


