import mongoose from 'mongoose';
import { products } from './product.interface';
import { productsModel } from './product.model';
import { productValidator } from './validate.joy';




export const createProductsToDB=async(productData:products)=>{


    const {  value } = productValidator.validate(productData);


    const result=await productsModel.create(value)

    return result



}

export const getAllProductsToDB=async()=>{


    


    const result=await productsModel.find()

    return result



}


export const getspecificProducts=async(id:string)=>{



    const result=await productsModel.findById(id)

    return result



}

export const updateDatatoDb=async(id:string,data:products)=>{

    const {name,description,price,category,tags,variants,inventory}=data
    // console.log(name)

    await productsModel.updateOne( { _id: new mongoose.Types.ObjectId(id) },
         { $set: {
          name,
          description,
          price,
          category,
          tags,
          variants,
          inventory


      } })


      const updateData=await productsModel.findOne({  _id: new mongoose.Types.ObjectId(id) },{_id:0})


    //   let updateData=await productsModel.aggregate([
    //     {$match:{ _id: new mongoose.Types.ObjectId(id) }},
    //     {$project:{_id:0}}
    //   ])

      return updateData

}

export const getspecificDeletedProducts=async(id:string)=>{



    const result=await productsModel.deleteOne({_id:new mongoose.Types.ObjectId(id)})

    return result



}

export const getSearchParamsProducts=async(search:string)=>{

    // console.log(search)



        let filter = {}

        if (search) {
            filter = { name: { $regex: search, $options: "i" } }
        }

        const result = await productsModel.find(filter)
    // console.log(result)

    return result


}