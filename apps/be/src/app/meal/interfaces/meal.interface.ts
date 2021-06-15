import { Document } from 'mongoose';
import {Food} from "@models/vo/food";
export interface Meal extends Document {
  readonly type: string;
  readonly time: string;
  readonly foods: {
    name: string
    qty: number
  };
  readonly date: string;
  readonly user: string;
}
