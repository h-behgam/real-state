import { Schema, model, models } from "mongoose";

export interface UserType {
    _id?: number
    email: string
    password:string
    createdAt:Date
}
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
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

const User = models.User || model("User", userSchema);

export default User;
