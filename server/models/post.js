import mongoose from "mongoose";

const requiredString = {
    type: String,
    required: true,
}

const postSchema = new mongoose.Schema(
    {
        userId: requiredString,
        firstName: requiredString,
        lastName: requiredString,
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;