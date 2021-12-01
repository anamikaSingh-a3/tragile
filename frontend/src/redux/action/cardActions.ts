import { ICard } from "../interfaces";
import { ACTIVE_CARD, ADD_CARD } from "../types";

export const addCard = (card: ICard) =>{
    return {
        id: card.card_id,
        type: ADD_CARD,
        payload: card
    }
} 

export const addActiveCard = (activeCard: ICard) => {
    return {
        type: ACTIVE_CARD,
        payload: activeCard
    }
}