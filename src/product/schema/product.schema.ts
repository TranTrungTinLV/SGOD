import { Transform } from '@nestjs/class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { v4 } from 'uuid';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    type: String,
    default: function UUID() {
      return v4().split('-')[0];
    },
  })
  id: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  description: string;
  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  // })
  // @Type(() => Category)
  // categories: Category[];

  @Prop({ type: Number, required: true })
  price_original: number;

  @Prop()
  price_new: number;
  // @Prop()
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]

  @Prop()
  images: string;

  @Prop({ type: String, required: true })
  size: string;
  @Prop({ type: String, required: true })
  shippings: string;
  @Prop()
  category: string;
  @Prop()
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
