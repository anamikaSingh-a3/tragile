declare module 'tragile-user' {
    export interface IUser {
        user_id?: number
        name: string
        username?: string
        bio?: string
        email: string
        password: string
        created_at?: Date
        updated_at?: Date
    }

    export interface ITokenState {
        token: ''
    }

    export interface IUser {
        name: string
        username?: string
        email: string
        password?: string
    }

    export interface IUserTokenState {
        userToken: IUserToken
    }
    export interface IUserToken {
        name: string
        email: string
    }
    export interface IUserState {
        user: {
            userData: IUser[],
            token: string
        }
    }
    export interface IUserEmailVerification {
        email: string
    }

    export interface IMessage {
        message: string
    }
    export interface IMessageState {
        message: ''
    }
}