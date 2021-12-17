declare module 'tragile-board' {
  export interface IBoard {
    board_id: string
    title: string
workspace: string

    visibility: string
  }
  export interface IBoardState {
    boards: IBoard[]
  }
  export interface IActiveBoard {
    board_id: string
    title: string
workspace: string

    visibility: string
  }
  export interface IActiveWorkspaceBoardState {
    activeWorkspaceBoard: IActiveBoard[]
  }
  export interface IActiveBoardState {
    activeBoard: IActiveBoard
  }


}
