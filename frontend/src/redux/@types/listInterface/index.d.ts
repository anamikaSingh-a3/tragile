declare module 'tragile-list' {
  export interface IList {
    list_id: string
    title: string
    description?: string
    board_id: string
  }

  export interface IActiveBoardListState {
    activeBoardList: IList[]
  }

  export interface IActiveListState {
    activeList: IList
  }
}
