export {};

declare module 'express-session' {
    interface SessionData {
        email: string,
        token:string,
        id_User: number
    }
}