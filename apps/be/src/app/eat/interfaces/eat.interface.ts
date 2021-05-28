import { Document } from 'mongoose';
export interface Eat extends Document {
  readonly kcal: number;
  readonly date: string;
  readonly user: string;
}
