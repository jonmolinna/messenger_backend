import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        trim: true,
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model('Messages', messageSchema);