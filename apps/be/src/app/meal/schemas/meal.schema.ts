import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const MealSchema = new mongoose.Schema({
  food: String,
  date: String,
  user: String,
}, { versionKey: false });
