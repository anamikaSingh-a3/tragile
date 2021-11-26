export interface IBoard {
  id: string
  title: string
  // list: string[]
  workspaceId: string
  visibility: string
}

export interface IBoardState {
  boards: IBoard[]
}

export interface IWorkspace {
  workspace_id: string
  title: string
  type: string
  description: string
  // board: IBoard[]
  createdAt?: Date
}

export interface IActiveWorkspace {
  workspace_id: string
  title: string
  description: string
  // board: IBoard[]
  createdAt?: Date
}
export interface IWorkspaceState {
  workspaces: IWorkspace[]
}

export interface IActiveWorkspaceState {
  activeWorkspace: IActiveWorkspace
}
