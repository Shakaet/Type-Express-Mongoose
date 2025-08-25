"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchParamsProducts = exports.getspecificDeletedProducts = exports.updateDatatoDb = exports.getspecificProducts = exports.getAllProductsToDB = exports.createProductsToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("./product.model");
const validate_joy_1 = require("./validate.joy");
const createProductsToDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const { value } = validate_joy_1.productValidator.validate(productData);
    const result = yield product_model_1.productsModel.create(value);
    return result;
});
exports.createProductsToDB = createProductsToDB;
const getAllProductsToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productsModel.find();
    return result;
});
exports.getAllProductsToDB = getAllProductsToDB;
const getspecificProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productsModel.findById(id);
    return result;
});
exports.getspecificProducts = getspecificProducts;
const updateDatatoDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, category, tags, variants, inventory } = data;
    // console.log(name)
    yield product_model_1.productsModel.updateOne({ _id: new mongoose_1.default.Types.ObjectId(id) }, { $set: {
            name,
            description,
            price,
            category,
            tags,
            variants,
            inventory
        } });
    const updateData = yield product_model_1.productsModel.findOne({ _id: new mongoose_1.default.Types.ObjectId(id) }, { _id: 0 });
    //   let updateData=await productsModel.aggregate([
    //     {$match:{ _id: new mongoose.Types.ObjectId(id) }},
    //     {$project:{_id:0}}
    //   ])
    return updateData;
});
exports.updateDatatoDb = updateDatatoDb;
const getspecificDeletedProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productsModel.deleteOne({ _id: new mongoose_1.default.Types.ObjectId(id) });
    return result;
});
exports.getspecificDeletedProducts = getspecificDeletedProducts;
const getSearchParamsProducts = (search) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(search)
    let filter = {};
    if (search) {
        filter = { name: { $regex: search, $options: "i" } };
    }
    const result = yield product_model_1.productsModel.find(filter);
    // console.log(result)
    return result;
});
exports.getSearchParamsProducts = getSearchParamsProducts;
