import jwt from 'jsonwebtoken';
import { SECRET_KEY_TOKEN } from '../config.js';

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    try {
        if (!token) {
            throw { message: 'No tienes Autorización' };
        }

        const bearer = token.split(" ");
        const bearerToken = bearer[1];

        const decode = jwt.verify(bearerToken, SECRET_KEY_TOKEN);
        const { _id } = decode;

        req.id_user_token = _id;

    } catch (err) {
        return res.status(401).json({
            auth: false,
            errors: err,
        })
    }

    next();
};

export default verifyToken;