import { findOneUserByUsername } from "./find.user.js";

export function validateUser(name, username, password, confirm_password) {
    const errors = {};
    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const user = findOneUserByUsername(username);
    console.log('YOOO', user)

    if (!name.trim()) {
        errors.name = 'Ingrese un nombre';
    }
    if (name.length <= 3) {
        errors.name = 'El nombre debe tener mas de tres caracteres';
    }
    if (!nameRegex.test(name)) {
        errors.name = "El nombre solo acepta letras y espacios";
    }

    if (!username.trim()) {
        errors.username = "Ingrese un usuario";
    }
    if (username.length <= 4) {
        errors.username = "El usuario debe tener mas de cuatro caracteres";
    }
    if (!usernameRegex.test(username)) {
        errors.username = 'Ingrese un usuario valido';
    }
    // if (user) {
    //     errors.username = 'Ya existe el usuario';
    // }

    if (!password) {
        errors.password = "Ingrese una contraseña";
    }
    if (password !== confirm_password) {
        errors.password = 'Las contraseñas no son iguales';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    }
};