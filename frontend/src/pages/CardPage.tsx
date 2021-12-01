import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IActiveCardState, ICard } from '../redux/interfaces'
import updateCardThunk from '../redux/thunk/updateCardThunk'
import { StyledButton } from '../theme/uiComponents/Button'

interface ICardPageProps {
    card: ICard
}

const CardPage: React.FC<ICardPageProps> = (props: ICardPageProps) => {
    const activeCard = useSelector((state: IActiveCardState) => state.activeCard)
    const [description, setDescription] = useState<string | undefined>(activeCard.description)

    const dispatch = useDispatch()

    const handleButtonClick = () => {
        const requestBody = {
            card_id: props.card.card_id,
            description: description,
        }
        dispatch(updateCardThunk(requestBody))
    }

    return (
        <>
            card {props.card.title}
            <TextField
                id='filled-secondary'
                placeholder='Add card description'
                variant='filled'
                color='secondary'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
            />
            <StyledButton
                variant='contained'
                color='primary'
                onClick={handleButtonClick}
                disabled={!description}
            >
                Save
            </StyledButton>
        </>
    )
}

export default CardPage