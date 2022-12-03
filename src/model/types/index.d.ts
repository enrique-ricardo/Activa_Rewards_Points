export {};

declare module 'express-session' {
    interface SessionData {
        email: string,
        token:string
    }
}