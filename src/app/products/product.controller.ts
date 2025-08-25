import { NextFunction, Request, Response } from "express";
import { createProductsToDB } from "./product.service";



export let CreateProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
            let product=req.body
            console.log(product)


        let result=await createProductsToDB(product)

        res.status(201).json({
            status:true,
            message:"data insert Successfully",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"data inserted failed",
            data:err.message
        })

        }

}