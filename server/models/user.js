import mongoose from "mongoose";

const requiredText = {
    type: String,
    required: true,
    min: 2,
    max: 50,
}

const UserSchema = new mongoose.Schema(
    {
        firstName: requiredText,
        lastName: requiredText,
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;