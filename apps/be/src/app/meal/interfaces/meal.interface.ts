import { Document } from 'mongoose';
export interface Meal extends Document {
  readonly type: string;
  readonly time: string;
  readonly food: string;
  readonly date: string;
  readonly user: string;
}
