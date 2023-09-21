export function validateMessage(message) {
    const errors = {};
    if (!message.trim()) {
        errors.message = 'Ingrese un mensaje';
    };

    return {
        errors,
        valid: Object.keys(errors).length < 1,
    }
};
