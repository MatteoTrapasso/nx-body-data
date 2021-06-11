import { Document } from 'mongoose';
export interface Food extends Document {
  readonly Food_Code: string;
}
