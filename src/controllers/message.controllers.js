import Message from '../models/Message.js';
import { validateMessage } from '../utils/validate.message.js';

// Create Message
export const createMessage = async (req, res) => {
    const { message } = req.body;
    const id_user = req.id_user_token;

    try {
        const { errors, valid } = validateMessage(message);

        if (!valid) {
            throw errors
        };

        const content = await Message.create({
            message,
            username: id_user
        });

        return res.json({ content });

    } catch (err) {
        return res.json({ message: 'Error', errors: err })
    }
};

// Obtener Messages
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('username', '-password').sort({ createdAt: -1 })

        return res.json({ messages })

    } catch (err) {
        return res.json({ message: 'Error', errors: err })
    }
};