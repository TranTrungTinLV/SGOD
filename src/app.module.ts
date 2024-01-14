import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose'
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    AuthModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
