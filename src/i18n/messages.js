// src/i18n/messages.js

export default {
    ua: {
        // Главная (AuthView)
        welcomeTitle: "Ласкаво просимо",
        emailLabel: "Ел. адреса",
        emailPlaceholder: "example@domain.com",
        passwordLabel: "Пароль",
        passwordPlaceholder: "••••••",
        loginBtn: "Увійти",
        cantLogin: "Забули пароль?",
        registerLink: "Реєстрація",
        orContinue: "Або продовжити через",
        continueWith: "Продовжити з",
        secureNote: "Безпечний вхід з reCAPTCHA за правилами Google",
        guestLogin: "Увійти як гість",

        // Регистрация (RegisterView)
        registerTitle: "Реєстрація",
        continueAuth: "Або продовжити авторизацію...",
        nameLabel: "Ім'я",
        registerBtn: "Реєстрація",
        backToLogin: "Назад до Входу",

        // Сброс пароля (PasswordResetView)
        resetTitle: "Скидання пароля",
        resetHelp: "Введіть email, ми надішлемо посилання для скидання.",
        sendLinkBtn: "Надіслати посилання",

        // Ошибки валидации (Yup + VeeValidate)
        validationEmailRequired: "Ел. адреса обов'язкова",
        validationEmailFormat: "Невірний формат email",
        validationPasswordRequired: "Пароль обов'язковий",
        validationPasswordMin: "Мінімум 6 символів",
        validationNameRequired: "Введіть ім'я",
        validationNameMin: "Занадто коротке ім'я",
        validationConfirmPasswordRequired: "Повторіть пароль",
        validationConfirmPasswordMismatch: "Паролі не співпадають"
    },
    en: {
        // AuthView
        welcomeTitle: "Welcome",
        emailLabel: "Email Address",
        emailPlaceholder: "example@domain.com",
        passwordLabel: "Password",
        passwordPlaceholder: "••••••",
        loginBtn: "Log In",
        cantLogin: "Can't log in?",
        registerLink: "Register",
        orContinue: "Or continue with",
        continueWith: "Continue with",
        secureNote: "Secure login with reCAPTCHA subject to Google rules",
        guestLogin: "Login as Guest",

        // RegisterView
        registerTitle: "Register",
        continueAuth: "Or continue authorization...",
        nameLabel: "Name",
        registerBtn: "Register",
        backToLogin: "Back to Login",

        // PasswordResetView
        resetTitle: "Reset Password",
        resetHelp: "Enter your email, we will send you a reset link.",
        sendLinkBtn: "Send Link",

        // Validation errors
        validationEmailRequired: "Email is required",
        validationEmailFormat: "Invalid email format",
        validationPasswordRequired: "Password is required",
        validationPasswordMin: "At least 6 characters",
        validationNameRequired: "Enter your name",
        validationNameMin: "Name is too short",
        validationConfirmPasswordRequired: "Repeat the password",
        validationConfirmPasswordMismatch: "Passwords do not match"
    },
    ru: {
        // AuthView
        welcomeTitle: "Добро пожаловать",
        emailLabel: "Эл. адрес",
        emailPlaceholder: "example@domain.com",
        passwordLabel: "Пароль",
        passwordPlaceholder: "••••••",
        loginBtn: "Войти",
        cantLogin: "Забыли пароль?",
        registerLink: "Регистрация",
        orContinue: "Или продолжить через",
        continueWith: "Продолжить с",
        secureNote: "Безопасный вход с reCAPTCHA по правилам Google",
        guestLogin: "Войти как гость",

        // RegisterView
        registerTitle: "Регистрация",
        continueAuth: "Или продолжить авторизацию...",
        nameLabel: "Имя",
        registerBtn: "Регистрация",
        backToLogin: "Назад к Входу",

        // PasswordResetView
        resetTitle: "Сброс пароля",
        resetHelp: "Введите email, мы отправим ссылку для восстановления.",
        sendLinkBtn: "Отправить ссылку",

        // Ошибки валидации
        validationEmailRequired: "Email обязателен",
        validationEmailFormat: "Неверный формат email",
        validationPasswordRequired: "Пароль обязателен",
        validationPasswordMin: "Минимум 6 символов",
        validationNameRequired: "Введите имя",
        validationNameMin: "Слишком короткое имя",
        validationConfirmPasswordRequired: "Повторите пароль",
        validationConfirmPasswordMismatch: "Пароли не совпадают"
    }
};
