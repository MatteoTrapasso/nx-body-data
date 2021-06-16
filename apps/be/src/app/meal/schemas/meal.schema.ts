import * as mongoose from 'mongoose';
import {Food} from "@models/vo/food";

const Schema = mongoose.Schema;
export const MealSchema = new mongoose.Schema({
  type: String,
  time: String,
  food: String,
  date: String,
  user: String,
}, { versionKey: false });
