import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const FoodSchema = new mongoose.Schema({
  Food_Code: String,
  Food_Name_ITA: String,
  Total_protein: Number,
  Total_fat: Number,
  Available_carbohydrates_MSE: Number,
  Energy_Rec_with_fibre: Number
}, { versionKey: false });
