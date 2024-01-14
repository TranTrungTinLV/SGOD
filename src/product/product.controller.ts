import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Product) {
    return this.productService.update(id, updateProductDto);
  }
}
