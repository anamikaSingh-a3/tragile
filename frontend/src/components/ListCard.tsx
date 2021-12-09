import { Modal } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CardPage from '../pages/CardPage'
import { StyledCard } from '../theme/uiComponents/Card'
import { addActiveCard } from '../redux/action/cardActions'
import { StyledModal } from '../theme/uiComponents/Modal'
import { ICard } from 'tragile-card'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import { Draggable } from 'react-beautiful-dnd'

interface ListCardProps {
  card: ICard
  index: number
}

const ListCard:React.FC<ListCardProps> = (props: ListCardProps) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const handleCloseCardModal = () => {
    setOpen(false)
  }
  const onCardHandler = () => {
    dispatch(addActiveCard(props.card))
    dispatch(getAllCardsThunk())
    setOpen(true)
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
          <CardPage card={props.card} />
        </StyledModal>
      </Modal>
    </>
  )
}
export default ListCard