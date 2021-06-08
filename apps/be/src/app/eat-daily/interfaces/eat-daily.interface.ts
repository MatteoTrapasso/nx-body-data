import { Document } from 'mongoose';
export interface EatDaily extends Document {
  readonly date: string;
  readonly user: string;
}
