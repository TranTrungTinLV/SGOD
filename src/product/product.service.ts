import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: mongoose.Model<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    const product = await this.productModel.find();
    return product;
  }
  async create(createProductDto: CreateProductDto) {
    const { name, description, images } = createProductDto;
    const newProduct = await this.productModel.create({
      ...createProductDto,
    });

    return newProduct;
  }
  async remove(id: string) {
    const findProduct = await this.productModel.findOne({ id: id });
    if (!findProduct) {
      throw new HttpException(`No product found! `, HttpStatus.NOT_FOUND);
    }
    await this.productModel.findByIdAndDelete(findProduct);
    return 'Hoan thanh xoa!';
  }
  async update(id: string, updateproductDto:Product) {
    const {
      name,
      description,
      images,
      price_original,
      price_new,
      quantity,
      size,
      category,
    } = updateproductDto;
    const findProduct = await this.productModel.findOneAndUpdate({id})
    // console.log(findProduct)
    if(!findProduct){
      throw new HttpException(`No product update found! `, HttpStatus.NOT_FOUND);
    }
    let updateProduct:any = {}
    name && (updateProduct.name = name);
    description && (updateProduct.description = description);
    images && (updateProduct.images = images);
    price_original && (updateProduct.price_original = price_original);
    price_new && (updateProduct.price_new = price_new);
    quantity && (updateProduct.quantity = quantity);
    size && (updateProduct.size = size);
    category && (updateProduct.category = category);

    await this.productModel.findByIdAndUpdate(id,updateproductDto,{new:true, runValidators: true,});

    const findProductAgain = await this.productModel.findOne({id:id});

    return findProductAgain;
  }
}
