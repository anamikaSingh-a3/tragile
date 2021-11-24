export interface IBoard {
  id: string
  title: string
  list: string[]
  workspaceId: string
}

export interface IBoardState {
  boards: IBoard[]
}

export interface IWorkspace {
  id: string
  title: string
  type: string
  description: string
  board: IBoard[]
}

export interface IActiveWorkspace {
  id: string
  title: string
  description: string
  board: IBoard[]
}
export interface IWorkspaceState {
  workspaces: IWorkspace[]
}

export interface IActiveWorkspaceState {
  activeWorkspace: IActiveWorkspace
}
