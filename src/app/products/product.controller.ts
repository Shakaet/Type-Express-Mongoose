import { NextFunction, Request, Response } from "express";
import { createProductsToDB, getAllProductsToDB, getSearchParamsProducts, getspecificDeletedProducts, getspecificProducts, updateDatatoDb } from "./product.service";



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
        next()

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
        next()

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
        next()

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
        next()

        }

}

export let getSpecificdeletedProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            let id=req.params.productId

        let result=await getspecificDeletedProducts(id)

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

export let getsearchParamsProducts=async(req:Request,res:Response,next:NextFunction)=>{

        try{
         
            let {search}=req.query

        let result=await getSearchParamsProducts(search)

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