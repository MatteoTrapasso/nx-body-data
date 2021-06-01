import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const BodyDataSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  date: String,
  user: String,
  name: String,
  bDate: String,
  gender: String,
}, { versionKey: false });
