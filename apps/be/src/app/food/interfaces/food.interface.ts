import { Document } from 'mongoose';
export interface Food extends Document {
  readonly height: number;
  readonly weight: number;
  readonly date: string;
  readonly user: string;
  readonly gender: string;
  readonly bDate: string;
}
