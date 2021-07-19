// サインアップ
export interface SignUpData {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

// サインイン
export interface SignInData {
    email: string
    password: string
}

// ユーザー
export interface User {
    id: number
    uid: string
    provider: string
    email: string
    name: string
    nickname?: string
    image?: string
    allowPasswordChange: boolean
}