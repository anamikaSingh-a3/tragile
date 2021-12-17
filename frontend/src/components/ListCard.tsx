import { Modal, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IActiveCardState, ICard } from 'tragile-card';

import { addActiveCard } from '../redux/action/cardActions/cardActions';
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk';
import updateCardThunk from '../redux/thunk/cardThunk/updateCardThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledCard } from '../theme/uiComponents/Card';
import { StyledCloseIcon } from '../theme/uiComponents/CloseIcon';
import { StyledModal } from '../theme/uiComponents/Modal';

interface ListCardProps {
  card: ICard
  index: number
}

const ListCard: React.FC<ListCardProps> = (props: ListCardProps) => {
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState(
    props.card.description
  )

  const dispatch = useDispatch()

  const handleCloseCardModal = () => {
    setOpen(false)
  }

  const onCardHandler = () => {
    dispatch(getAllCardsThunk())
    dispatch(addActiveCard(props.card))

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

  const handleClose = () => {
    handleCloseCardModal()
  }

  const activeCard = useSelector((state: IActiveCardState) => state.activeCard.card_id)
  console.log("STRINGGGGGG", activeCard.toString())
  console.log("DATA TYPE", typeof (activeCard.toString()))
  return (
    <>
      <Draggable draggableId={props.card.card_id.toString()} index={props.index}>
        {(provided) => (
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
          <StyledCloseIcon onClick={handleClose} />
        </StyledModal>
      </Modal>
    </>
  )
}
export default ListCard
