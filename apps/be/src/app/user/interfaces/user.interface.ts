import {Document} from 'mongoose';

export interface User extends Document {
  readonly bDate: string;
  readonly height: number;
  readonly gender: string;
  readonly nickname: string;
  readonly user: string;
}
