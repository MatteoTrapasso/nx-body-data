import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const EatDailySchema = new mongoose.Schema({
  date: String,
  user: String,
}, { versionKey: false });
