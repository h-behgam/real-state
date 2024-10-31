"use server";

import { Document, Schema, model, models } from "mongoose";

// تعریف اینترفیس برای نوع داده‌های یوزر
interface IUser extends Document {
  email: String;
  password: String;
  createdAt: Date;
}
export interface UserType {
  _id?: number;
  email: string;
  password: string;
  createdAt: Date;
}
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const User = models?.User || model("User", userSchema);

export default User;
