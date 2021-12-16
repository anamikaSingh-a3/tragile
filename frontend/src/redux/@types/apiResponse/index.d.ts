declare module 'tragile-response' {
    export interface ITragileResponse {
        statusCode: number,
        payload: Object,
        message?: string
    }
}