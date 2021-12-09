import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { StyledListContainer } from '../theme/uiComponents/layout/Container'
import CreateList from '../components/CreateList'
import { useDispatch, useSelector } from 'react-redux'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import BoardList from '../components/BoardList'
import { IActiveBoardListState, IList } from 'tragile-list'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import updateCardListIdThunk from '../redux/thunk/updateCardListIdThunk'

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

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result
    console.log('destination', destination, 'source', source, 'draggableId',draggableId, 'type', type)
  
    if (!destination) {
      return;
    }
   
    dispatch(updateCardListIdThunk({card_id: draggableId, list_id: destination.droppableId}))
  }
  return (
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
                <BoardList list={list} key={list.list_id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div >

      <CreateList />
      </div>
    </StyledListContainer>
  )
}

export default BoardPage
