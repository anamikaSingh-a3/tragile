export interface IBoard {
  board_id: string
  title: string
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
  createdAt?: Date
}

export interface IActiveWorkspace {
  workspace_id: string
  title: string
  description: string
  createdAt?: Date
}
export interface IWorkspaceState {
  workspaces: IWorkspace[]
}

export interface IActiveWorkspaceState {
  activeWorkspace: IActiveWorkspace
}

export interface IActiveBoard {
  board_id: string
  title: string
  workspaceId: string
  visibility: string
}

export interface IActiveBoardState {
  activeBoard: IActiveBoard[]
}
