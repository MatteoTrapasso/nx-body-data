import { Document } from 'mongoose';
import {Food} from "@models/vo/food";
import {IsArray, ValidateNested} from "class-validator";
export interface Meal extends Document {
  readonly type: string;
  readonly time: string;
  readonly foods: {
    food: Food,
    qty: number
  }[];
  readonly date: string;
  readonly user: string;
}
