import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5, // Changed to 'minlength' for consistency
    },
  },
  { timestamps: true } // Moved to the correct position
);

const User = mongoose.model("User", UserSchema);
export default User;
