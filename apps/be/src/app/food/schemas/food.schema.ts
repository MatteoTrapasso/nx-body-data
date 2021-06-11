import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const FoodSchema = new mongoose.Schema({
  Food_Code: String
}, { versionKey: false });
