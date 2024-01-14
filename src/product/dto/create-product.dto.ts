import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {

  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price_original: number;
  @IsNumber()
  price_new: number;
  @IsString()
  images: string;
  @IsString()
  size: string;
  @IsString()
  shippings: string;
  @IsString()
  category: string;
  @IsString()
  quantity: number;
}
