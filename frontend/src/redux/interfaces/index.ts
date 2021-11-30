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
  activeWorkspaceBoard: IActiveBoard[]
}

export interface IList {
  list_id: string
  title: string
  description?: string
  board: string
}

export interface IActiveBoardListState {
  activeBoardList :IList[]
}

export interface ICard {
  id: string
    title: string
    description?: string
    due_date?: Date
    list: string
}

export interface IAllCardState {
  card: ICard[]
}

export interface IActiveListState {
  activeList : IList
}