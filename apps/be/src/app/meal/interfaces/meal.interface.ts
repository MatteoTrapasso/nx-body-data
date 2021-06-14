import { Document } from 'mongoose';
export interface Meal extends Document {
  readonly food: string;
  readonly date: string;
  readonly user: string;
}
