import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { StyledListContainer } from '../theme/uiComponents/layout/Container'
import CreateList from '../components/CreateList'
import { useDispatch, useSelector } from 'react-redux'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import BoardList from '../components/BoardList'
import { IActiveBoardListState, IList } from 'tragile-list'

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
    <StyledListContainer maxWidth='lg'>
      {list.map((list: IList) => (
        <BoardList list={list} />
      ))}
      <CreateList />
    </StyledListContainer>
  )
}

export default BoardPage
