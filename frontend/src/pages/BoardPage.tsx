import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {
  StyledContainer,
  StyledListContainer
} from '../theme/uiComponents/layout/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getListByBoardThunk } from '../redux/thunk/listThunk/getListByBoardThunk'
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk'
import BoardList from '../components/BoardList'
import { IActiveBoardListState, IList } from 'tragile-list'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import updateCardListIdThunk from '../redux/thunk/cardThunk/updateCardListIdThunk'
import { IActiveBoardState } from 'tragile-board'
import { IActiveCardState } from 'tragile-card'
import Heading from '../components/common/Heading'
import InputContainer from '../components/createComponent/InputContainer'

interface IParams {
  id: string
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IParams>()
  const dispatch = useDispatch()

  const list = useSelector(
    (state: IActiveBoardListState) => state.activeBoardList
  )
  const activeBoard = useSelector((state: IActiveBoardState) => state.activeBoard)

  const activeCard = useSelector((state: IActiveCardState) => state.activeCard)
  useEffect(() => {
    return () => {
      dispatch(getListByBoardThunk(id))
      dispatch(getAllCardsThunk())
    }
  }, [id, dispatch])

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result

    if (!destination) {
      return;
    }
    dispatch(
      updateCardListIdThunk(
        { card_id: draggableId, list_id: destination.droppableId }
      )
    )

  }
  return (
    <StyledContainer maxWidth='lg'>
      <Heading type={'Board '} value={activeBoard.title} />
      <StyledListContainer maxWidth='lg'>
        <DragDropContext
          onDragEnd={(result, provided) => {
            onDragEnd(result)
          }}
        >
          <Droppable droppableId='app' type='list' direction='horizontal'>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((list: IList, index: number) => (
                  <BoardList list={list} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <InputContainer type='list' listId={''} />
      </StyledListContainer>
    </StyledContainer>
  )
}

export default BoardPage
