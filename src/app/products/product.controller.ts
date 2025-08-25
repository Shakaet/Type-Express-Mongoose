import { NextFunction, Request, Response } from "express";
import { createProductsToDB, getAllProductsToDB, getspecificProducts, updateDatatoDb } from "./product.service";



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





export let getAllProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         


        let result=await getAllProductsToDB()

        res.status(201).json({
            status:true,
            message:"Products fetched successfully!",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"data fetched failed",
            data:err.message
        })

        }

}

export let getSpecificProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            let id=req.params.id

        let result=await getspecificProducts(id)

        res.status(201).json({
            status:true,
            message:"specific Products fetched successfully!",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"data fetched failed",
            data:err.message
        })

        }

}

export let  updateProduct=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            let id=req.params.productId

            // console.log(id,req.body)


            let data=req.body

            

        let result=await updateDatatoDb(id,data)

        res.status(201).json({
            status:true,
            message:"Product updated successfully!",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"Product updated failed",
            data:err.message
        })

        }

}