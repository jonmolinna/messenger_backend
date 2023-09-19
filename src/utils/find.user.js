import User from "../models/User.js";

export async function findOneUserByUsername(username) {
    const user = await User.findOne({ username });
    return user;
};