import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {
  StyledListContainer
} from '../theme/uiComponents/layout/Container'
import CreateList from '../components/CreateList'
import { useDispatch, useSelector } from 'react-redux'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import {
  IActiveBoardListState,
  IList
} from '../redux/interfaces/index'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import BoardList from '../components/BoardList'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

interface IParams {
  id: string
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IParams>()
  const dispatch = useDispatch()

  const list = useSelector(
    (state: IActiveBoardListState) => state.activeBoardList
  )

  useEffect(() => {
    return () => {
      dispatch(getListByBoardThunk(id))
      dispatch(getAllCardsThunk())
    }
  }, [id, dispatch])

  return (
    <Droppable droppableId='boardList'>
      {(provided) => (
        <StyledListContainer
          maxWidth='lg'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {list.map((list: IList, index) => (
            <DragDropContext onDragEnd={() => { }}>
              <BoardList list={list} index={index} />
            </DragDropContext>
        ))}
        <CreateList />
      </StyledListContainer>

      )}
    </Droppable>
  )
}

export default BoardPage
