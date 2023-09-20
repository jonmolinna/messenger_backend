import jwt from 'jsonwebtoken';
import { SECRET_KEY_TOKEN } from '../config.js';

export function generateToken(id, username, name) {
    return jwt.sign(
        {
            _id: id,
            username,
            name,
        },
        SECRET_KEY_TOKEN,
        { expiresIn: '1d' },
    );
};