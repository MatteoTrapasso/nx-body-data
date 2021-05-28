import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const EatSchema = new mongoose.Schema({
  kcal: Number,
  date: String,
  user: String,
}, { versionKey: false });
