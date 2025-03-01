export class User {
    constructor({
                    userId,
                    userLogin,
                    userEmail,
                    phoneNumber,
                    firstName,
                    lastName,
                    avatarUrl,
                    passwordHash,
                    emailVerificationToken,
                    resetPasswordToken,
                    resetTokenExpiry,
                    createdAt,
                    updatedAt,
                    deletedAt,
                    lockedAt,
                    unlockedAt,
                    lastLoginDate,
                    userRole,
                    emailVerified,
                    userDeleted,
                    locked
                }) {
        this.userId = userId
        this.userLogin = userLogin
        this.userEmail = userEmail
        this.phoneNumber = phoneNumber
        this.firstName = firstName
        this.lastName = lastName
        this.avatarUrl = avatarUrl
        this.passwordHash = passwordHash
        this.emailVerificationToken = emailVerificationToken
        this.resetPasswordToken = resetPasswordToken
        this.resetTokenExpiry = resetTokenExpiry
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.deletedAt = deletedAt
        this.lockedAt = lockedAt
        this.unlockedAt = unlockedAt
        this.lastLoginDate = lastLoginDate
        this.userRole = userRole
        this.emailVerified = emailVerified
        this.userDeleted = userDeleted
        this.locked = locked
    }
}

// Функция для создания объекта пользователя с дефолтными значениями
export function createDefaultUser() {
    return new User({
        userId: null,
        userLogin: '',
        userEmail: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        passwordHash: '',
        emailVerificationToken: null,
        resetPasswordToken: null,
        resetTokenExpiry: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
        lockedAt: null,
        unlockedAt: null,
        lastLoginDate: null,
        userRole: {
            id: 0,
            userType: '',
            localizedName: ''
        },
        emailVerified: false,
        userDeleted: false,
        locked: false
    })
}
