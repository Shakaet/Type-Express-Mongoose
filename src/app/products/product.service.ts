import mongoose from 'mongoose';
import { products } from './product.interface';
import { productsModel } from './product.model';
import { productValidator } from './validate.joy';



export let createProductsToDB=async(productData:products)=>{


    const {  value } = productValidator.validate(productData);


    let result=await productsModel.create(value)

    return result



}

export let getAllProductsToDB=async()=>{


    


    let result=await productsModel.find()

    return result



}


export let getspecificProducts=async(id:string)=>{



    let result=await productsModel.findById(id)

    return result



}

export let updateDatatoDb=async(id:string,data:any)=>{

    let {name,description,price,category,tags,variants,inventory}=data
    // console.log(name)

     let result=await productsModel.updateOne( { _id: new mongoose.Types.ObjectId(id) },
         { $set: {
          name,
          description,
          price,
          category,
          tags,
          variants,
          inventory


      } })

      return result

}