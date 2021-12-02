declare module 'tragile-board' {
  export interface IBoard {
    board_id: string
    title: string
    workspaceId: string
    visibility: string
  }
  export interface IBoardState {
    boards: IBoard[]
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
}
