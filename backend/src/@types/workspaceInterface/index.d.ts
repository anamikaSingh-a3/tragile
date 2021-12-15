declare module 'tragile-workspace' {
    export interface IWorkspace {
        workspace_id?: number
        title: string
        type: string
        description: string
        createdAt?: Date
        // created_by: number
    }
}
    