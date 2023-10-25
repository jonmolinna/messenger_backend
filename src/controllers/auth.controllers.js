import User from "../models/User.js";
import { generateToken } from "../utils/create.token.js";
import { validateAuth } from "../utils/validate.auth.js";

export const auth = async (req, res) => {
    const { username, password } = req.body;

    try {
        const { errors, valid } = await validateAuth(username, password);

        if (!valid) {
            throw errors
        };

        const user = await User.findOne({ username });

        const token = generateToken(user._id, user.username, user.name);

        return res.json({
            message: 'Auntenticacion correcta',
            user: {
                _id: user._id,
                username: user.username,
                name: user.name,
                token
            }
        });

    } catch (err) {
        return res.status(400).json({ message: 'Error', errors: err })
    }
};