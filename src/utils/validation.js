// Функция для проверки корректности email
export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(email);
}

// Функция для проверки сложности пароля (например, минимум 6 символов)
export function isValidPassword(password) {
    return password.length >= 6;
}
