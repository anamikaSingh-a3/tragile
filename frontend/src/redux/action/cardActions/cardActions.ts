import { ICard } from 'tragile-card';

import { ACTIVE_CARD, ADD_CARD, RESET_ACTIVE_CARD } from '../../types';



export const addCard = (card: ICard) => {
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

export const resetActiveCard = () => {
    return {
        type: RESET_ACTIVE_CARD
    }
}