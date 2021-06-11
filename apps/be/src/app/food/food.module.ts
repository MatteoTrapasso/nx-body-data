import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodSchema } from './schemas/food.schema';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [
    MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }]),
  ],
})
export class FoodModule {}
