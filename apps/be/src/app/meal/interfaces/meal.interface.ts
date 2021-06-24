import {Document} from 'mongoose';
import {MenuItem} from "@models/vo/meal";

export interface Meal extends Document {
  readonly type: string;
  readonly time: string;
  readonly menu: MenuItem[];
  readonly date: string;
  readonly user: string;
}
