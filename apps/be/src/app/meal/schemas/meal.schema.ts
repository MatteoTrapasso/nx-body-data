import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const MealSchema = new mongoose.Schema({
  type: String,
  time: Date,
  menu: [{}],
  date: String,
  user: String,
}, {versionKey: false});
