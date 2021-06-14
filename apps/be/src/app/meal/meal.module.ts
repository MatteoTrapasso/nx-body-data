import {Module} from '@nestjs/common';
import {MealController} from './meal.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {MealSchema} from './schemas/meal.schema';
import {MealService} from "./meal.service";

@Module({
  controllers: [MealController],
  providers: [MealService],
  imports: [
    MongooseModule.forFeature([{name: 'Meal', schema: MealSchema}]),
  ],
})
export class MealModule {
}
