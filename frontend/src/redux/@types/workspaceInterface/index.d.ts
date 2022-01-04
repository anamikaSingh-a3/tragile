declare module 'tragile-workspace' {
  export interface IWorkspace {
    workspace_id: string
    title: string
    type: string
    description: string
    createdAt?: Date
    created_by?: number
  }
  export interface IWorkspaceState {
    workspaces: IWorkspace[]
  }
  export interface IActiveWorkspace {
    workspace_id: string
    title: string
    description: string
    createdAt?: Date
  }
  export interface IActiveWorkspaceState {
    activeWorkspace: IActiveWorkspace
  }
}
