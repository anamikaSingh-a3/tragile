import { List, Typography } from '@material-ui/core'
import { StyledList, StyledListItem } from '../theme/uiComponents/List'
import { useDispatch, useSelector } from 'react-redux'
import ListCard from './ListCard'
import { IAllCardState, ICard } from 'tragile-card'
import { IList } from 'tragile-list'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { StyledDroppableList } from '../theme/uiComponents/layout/Container'
import InputContainer from './createComponent/InputContainer'
import { StyledHeader } from '../theme/uiComponents/layout/Header'
import { addActiveList } from '../redux/action/listAction/listActions'

interface IBoardListProps {
  list: IList
  index: number
}

const BoardList: React.FC<IBoardListProps> = (props: IBoardListProps) => {
  const dispatch = useDispatch()

  const cards = useSelector((state: IAllCardState) => state.card)

  return (
    <Draggable draggableId={props.list.list_id} index={props.index}>
      {provided => (
        <StyledDroppableList
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={() => dispatch(addActiveList(props.list))}
          style={{ display: 'inline-flex', gap: 20 }}
        >
          <StyledList onClick={() => dispatch(addActiveList(props.list))}>
            <List component='nav' aria-label='main mailbox folders'>
              <Droppable droppableId={props.list.list_id}>
                {provided => (
                  <>
                    <StyledHeader>
                      <Typography variant='h4' gutterBottom>
                        {props.list.title}
                      </Typography>
                    </StyledHeader>
                    <StyledListItem
                      button
                      disableRipple
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {cards.map((card: ICard, index: number) =>
                        props.list.list_id === card.list ? (
                          <ListCard card={card} index={index} />
                        ) : (
                          ''
                        )
                      )}
                    </StyledListItem>
                  </>
                )}
              </Droppable>
            </List>
            <InputContainer listId={props.list.list_id} type='card' />
          </StyledList>
        </StyledDroppableList>
      )}
    </Draggable>
  )
}

export default BoardList
