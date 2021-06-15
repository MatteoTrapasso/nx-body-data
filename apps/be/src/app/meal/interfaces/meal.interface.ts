import { Document } from 'mongoose';
export interface Meal extends Document {
  readonly type: string;
  readonly time: string;
  readonly foods: any[];
  readonly date: string;
  readonly user: string;
}
