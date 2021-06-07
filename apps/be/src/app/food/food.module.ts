import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyDataSchema } from './schemas/body-data.schema';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [
    MongooseModule.forFeature([{ name: 'Food', schema: BodyDataSchema }]),
  ],
})
export class FoodModule {}
