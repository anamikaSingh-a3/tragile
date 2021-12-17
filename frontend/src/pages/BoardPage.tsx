import React, { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { IActiveBoardState } from 'tragile-board';
import { IActiveBoardListState, IList } from 'tragile-list';

import BoardList from '../components/BoardList';
import Heading from '../components/common/Heading';
import InputContainer from '../components/createComponent/InputContainer';
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk';
import updateCardListIdThunk from '../redux/thunk/cardThunk/updateCardListIdThunk';
import { getListByBoardThunk } from '../redux/thunk/listThunk/getListByBoardThunk';
import { StyledContainer, StyledListContainer } from '../theme/uiComponents/layout/Container';

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
        { card_id: Number(draggableId), list_id: Number(destination.droppableId) }
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
