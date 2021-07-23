// サインアップ
export interface SignUpData {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export interface SignUpFormData extends FormData {
    append(name: keyof SignUpData, value: String | Blob, fileName?: string): any
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

export interface UpdateUserData {
    id: number | undefined | null
    name?: string 
    // image?: string
}

export interface UpdateUserFormData extends FormData {
    append(name: keyof UpdateUserData, value: String | Blob, fileName?: string): any
}