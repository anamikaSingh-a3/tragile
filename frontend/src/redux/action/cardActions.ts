import { ICard } from '../interfaces';

export const addCard = (card: ICard) =>{
    return {
        id: card.id,
        type: 'ADD_CARD',
        payload: card
    }
} 

