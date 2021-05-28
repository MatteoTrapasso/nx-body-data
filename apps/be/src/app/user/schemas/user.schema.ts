import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const UserSchema = new mongoose.Schema({
  bDate: String,
  height: Number,
  gender: String,
  nickname: String,
  user: String,
}, { versionKey: false });
