import { Document } from 'mongoose';
export interface Food extends Document {
  readonly Food_Code: string;
  readonly Food_Name_ITA: string;
  readonly Total_protein: number;
  readonly Total_fat: number;
  readonly Available_carbohydrates_MSE: number;
  readonly Energy_Rec_with_fibre: number;
}
