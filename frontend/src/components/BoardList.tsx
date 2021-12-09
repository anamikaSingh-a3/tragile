import { Button, List, Menu, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledList, StyledListItem } from '../theme/uiComponents/List'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveList } from '../redux/action'
import createCardThunk from '../redux/thunk/createCardThunk'
import { v4 as uuidv4 } from 'uuid'
import ListCard from './ListCard'
import { IAllCardState, ICard } from 'tragile-card'
import { IActiveListState, IList } from 'tragile-list'
import { Draggable, Droppable } from 'react-beautiful-dnd'

interface IBoardListProps {
  list: IList
  index: number
}

const BoardList: React.FC<IBoardListProps> = (props: IBoardListProps) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [title, setTile] = useState<string>('')

  const dispatch = useDispatch()

  const cards = useSelector((state: IAllCardState) => state.card)
  const activeList = useSelector((state: IActiveListState) => state.activeList)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setTile('')
  }

  const handleButtonClick = (listId: string) => {
    const requestBody: ICard = {
      card_id: uuidv4(),
      title: title,
      list: listId
    }
    dispatch(createCardThunk(requestBody))
    handleClose()
  }

  return (
    <Draggable draggableId={props.list.list_id} index={props.index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={() => dispatch(addActiveList(props.list))} style={{display: 'inline-flex', gap: 20}}>
          <StyledList onClick={() => dispatch(addActiveList(props.list))}>
            <List component='nav' aria-label='main mailbox folders'>
              <Droppable droppableId={props.list.list_id}>
                {provided => (
                  <StyledListItem button disableRipple ref={provided.innerRef} {...provided.droppableProps}>
                    {props.list.title}
                    {cards.map((card: ICard, index: number) =>
                      props.list.list_id === card.list ? (
                        <ListCard card={card} index={index} />
                      ) : (
                        ''
                      )
                    )}
              {provided.placeholder}
                  </StyledListItem>
                )}
                
              </Droppable>
              {/* <StyledListItem button disableRipple>
          {props.list.title}
          {cards.map((card: ICard, index: number) =>
            props.list.list_id === card.list ? (
              <Draggable
                key={card.card_id}
                draggableId={card.card_id}
                index={index}
              >
                {(provided, snapshot) => <ListCard card={card} index={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}/>}
              </Draggable>
            ) : (
              ''
            )
          )} */}
       
        {/* </StyledListItem>  */}
            </List>
            <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            variant='contained'
          >
            Create Card
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <TextField
                id='filled-secondary'
                placeholder='Add card title'
                variant='filled'
                color='secondary'
                value={title}
                onChange={e => setTile(e.target.value)}
                fullWidth
              />
            </MenuItem>
            <StyledButton
              variant='contained'
              color='primary'
              onClick={() => handleButtonClick(activeList.list_id)}
              disabled={!title}
            >
              Create card
            </StyledButton>
            <CloseIcon onClick={handleClose} />
          </Menu>
          </StyledList>
        </div>
      )}
    </Draggable>
  )
}

export default BoardList
