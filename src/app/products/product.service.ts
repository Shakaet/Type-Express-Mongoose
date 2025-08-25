import { products } from './product.interface';
import { productsModel } from './product.model';



export let createProductsToDB=async(productData:products)=>{


    let result=await productsModel.create(productData)

    return result



}