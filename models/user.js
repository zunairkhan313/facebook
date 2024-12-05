import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        surName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;