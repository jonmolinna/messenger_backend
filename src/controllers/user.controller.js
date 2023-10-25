import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { validateUser } from '../utils/validate.user.js';

// Create User
export const createUser = async (req, res) => {
    const { name, username, password, confirm_password } = req.body;

    try {
        const { errors, valid } = await validateUser(name, username, password, confirm_password);

        if (!valid) {
            throw errors
        }

        let hash_password = await bcrypt.hash(password, 6);

        const usuario = await User.create({ name, username, password: hash_password });
        const data = { name: usuario.name, username: usuario.username, _id: usuario._id }
        return res.json({ message: 'Creado con exito', user: data })

    } catch (err) {
        return res.status(400).json({ message: 'Error', errors: err })
    }
}