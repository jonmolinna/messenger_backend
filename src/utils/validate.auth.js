import bcrypt from 'bcryptjs';
import { findOneUserByUsername } from './find.user.js';

export async function validateAuth(username, password) {
    const errors = {};
    const user = await findOneUserByUsername(username);

    if (!username.trim()) {
        errors.username = 'Ingrese un usuario';
    };

    if (!password) {
        errors.password = 'Ingrese una contraseña';
    };

    if (!user) {
        errors.message = 'Credenciales Incorrectas';
    }

    let is_password = '';

    if (password && user) {
        is_password = await bcrypt.compare(password, user?.password);
    }

    if (!is_password) {
        errors.message = 'Credenciales Incorrectas';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    }
};