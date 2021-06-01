import { Document } from 'mongoose';
export interface BodyData extends Document {
  readonly height: number;
  readonly weight: number;
  readonly date: string;
  readonly user: string;
  readonly name: string;
  readonly gender: string;
  readonly bDate: string;
}
