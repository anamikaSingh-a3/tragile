declare module 'tragile-user' {
    export interface IUser {
        email: string,
        username?: string,
        name: string,
        password: string,
        bio?: string,
    }
    export interface IVerifyUser {
        email: string,
        name: string
    }
}