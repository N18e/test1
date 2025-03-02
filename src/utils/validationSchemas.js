// src/utils/validationSchemas.js
import * as yup from 'yup'
import i18nMessages from '@/i18n/messages'

/**
 * Генерируем схему валидации для логина (AuthView)
 * на основе выбранного языка.
 */
export function getLoginSchema(lang) {
    const msg = i18nMessages[lang] || i18nMessages.ua
    return yup.object({
        email: yup
            .string()
            .required(msg.validationEmailRequired)
            .email(msg.validationEmailFormat),
        password: yup
            .string()
            .required(msg.validationPasswordRequired)
            .min(6, msg.validationPasswordMin)
    })
}

/**
 * Генерируем схему валидации для регистрации (RegisterView)
 */
export function getRegisterSchema(lang) {
    const msg = i18nMessages[lang] || i18nMessages.ua
    return yup.object({
        name: yup
            .string()
            .required(msg.validationNameRequired)
            .min(2, msg.validationNameMin),
        email: yup
            .string()
            .required(msg.validationEmailRequired)
            .email(msg.validationEmailFormat),
        password: yup
            .string()
            .required(msg.validationPasswordRequired)
            .min(6, msg.validationPasswordMin),
        confirmPassword: yup
            .string()
            .required(msg.validationConfirmPasswordRequired)
            .oneOf([yup.ref('password')], msg.validationConfirmPasswordMismatch)
    })
}
