import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const MealSchema = new mongoose.Schema({
  type: String,
  time: String,
  menu: [{}],
  date: String,
  user: String,
}, {versionKey: false});
