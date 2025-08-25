import mongoose from 'mongoose';
import { products } from './product.interface';
import { productsModel } from './product.model';
import { productValidator } from './validate.joy';
import { string } from 'joi';



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


      let updateData=await productsModel.findOne({  _id: new mongoose.Types.ObjectId(id) },{_id:0})


    //   let updateData=await productsModel.aggregate([
    //     {$match:{ _id: new mongoose.Types.ObjectId(id) }},
    //     {$project:{_id:0}}
    //   ])

      return updateData

}

export let getspecificDeletedProducts=async(id:string)=>{



    let result=await productsModel.deleteOne({_id:new mongoose.Types.ObjectId(id)})

    return result



}

export let getSearchParamsProducts=async(search:any)=>{

    // console.log(search)



        let filter = {}

        if (search) {
            filter = { name: { $regex: search, $options: "i" } }
        }

        let result = await productsModel.find(filter)
    // console.log(result)

    return result


}