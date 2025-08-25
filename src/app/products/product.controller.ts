import { NextFunction, Request, Response } from "express";
import { createProductsToDB, getAllProductsToDB, getSearchParamsProducts, getspecificDeletedProducts, getspecificProducts, updateDatatoDb } from "./product.service";




export const CreateProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
            const product=req.body
            console.log(product)


        const result=await createProductsToDB(product)

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
        next()

        }

}





export const getAllProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         


        const result=await getAllProductsToDB()

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
        next()

        }

}

export const getSpecificProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            const id=req.params.id

        const result=await getspecificProducts(id)

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
        next()

        }

}

export const  updateProduct=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            const id=req.params.productId

            // console.log(id,req.body)


            const data=req.body

            

        const result=await updateDatatoDb(id,data)

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
        next()

        }

}

export const getSpecificdeletedProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            const id=req.params.productId

        const result=await getspecificDeletedProducts(id)

        res.status(201).json({
            status:true,
            message:" Products Deleted successfully!",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"data Deleted failed",
            data:err.message
        })
        next()

        }

}

export const getsearchParamsProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            const {search}=req.query

        const result=await getSearchParamsProducts(search as string)

        res.status(201).json({
            status:true,
            message:"product serach successfully",
            data:result
        })
        }catch(err:any){
            res.status(404).json({
            status:false,
            message:"product search failed",
            data:err.message
            
        })
        next()


        }

}