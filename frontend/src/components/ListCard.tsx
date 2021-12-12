import { Modal, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCard } from '../theme/uiComponents/Card'
import { addActiveCard } from '../redux/action/cardActions'
import { StyledModal } from '../theme/uiComponents/Modal'
import { IActiveCardState, ICard } from 'tragile-card'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import { Draggable } from 'react-beautiful-dnd'
import { StyledButton } from '../theme/uiComponents/Button'
import updateCardThunk from '../redux/thunk/updateCardThunk'

interface ListCardProps {
  card: ICard
  index: number
}

const ListCard:React.FC<ListCardProps> = (props: ListCardProps) => {
  const activeCard = useSelector((state: IActiveCardState) => state.activeCard)
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState<string | undefined>(
    activeCard.description
  )

  const dispatch = useDispatch()

  const handleCloseCardModal = () => {
    setOpen(false)
  }
  
  const onCardHandler = () => {
    dispatch(addActiveCard(props.card))
    dispatch(getAllCardsThunk())
    setOpen(true)
  }

  const handleButtonClick = () => {
    const requestBody = {
      card_id: props.card.card_id,
      description: description
    }
    dispatch(updateCardThunk(requestBody))
    setOpen(false)
  }

  return (
    <>
    <Draggable draggableId={props.card.card_id} index={props.index}>
      {(provided)=> (
        <div 
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}>

      <StyledCard onClick={() => onCardHandler()}>
        {props.card.title}
      </StyledCard>
        </div>
      )}
    </Draggable>

      <Modal
        open={open}
        onClose={handleCloseCardModal}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <StyledModal>
          card {props.card.title}
          <TextField
            id='filled-secondary'
            placeholder='Add card description'
            variant='filled'
            color='secondary'
            value={description}
            onChange={e => setDescription(e.target.value)}
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
        </StyledModal>
      </Modal>
    </>
  )
}
export default ListCard