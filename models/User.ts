import mongoose, { Schema, models } from "mongoose";

const UserSchmea = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || mongoose.model('User', UserSchmea);
export default User;