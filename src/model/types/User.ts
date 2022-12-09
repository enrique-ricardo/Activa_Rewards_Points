export interface User {
    id: number,
    email: string,
    password: string,
    role: string,
    isFirstLogin: boolean,
    lastLog: Date
}