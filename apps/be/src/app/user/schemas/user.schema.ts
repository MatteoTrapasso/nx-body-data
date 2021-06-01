import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const UserSchema = new mongoose.Schema({
  bDate: String,
  height: Number,
  gender: String,
  name: String,
  user: String,
  weight: String,
}, { versionKey: false });
