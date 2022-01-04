declare module 'tragile-card' {
  export interface ICard {
    card_id: string
    title: string
    description?: string
    due_date?: Date
    list: string
  }

  export interface IAllCardState {
    card: ICard[]
  }

  export interface IActiveCardState {
    activeCard: ICard
  }
}
