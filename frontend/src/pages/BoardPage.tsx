import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  StyledListContainer
} from '../theme/uiComponents/layout/Container'
import CreateList from '../components/CreateList'
import { useDispatch, useSelector } from 'react-redux'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import {
  IActiveBoardListState,
  IAllCardState,
  ICard,
  IList
} from '../redux/interfaces/index'
import {
  Button,
  List,
  Menu,
  MenuItem,
  TextField
} from '@material-ui/core'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledList, StyledListItem } from '../theme/uiComponents/List'
import { StyledButton } from '../theme/uiComponents/Button'
import CloseIcon from '@material-ui/icons/Close'
import { v4 as uuidv4 } from 'uuid'
import createCardThunk from '../redux/thunk/createCardThunk'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import { addActiveList } from '../redux/action/listActions'
import { IActiveListState } from '../redux/interfaces/index'
import BoardList from '../components/BoardList'

interface IParams {
  id: string
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IParams>()
  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const [title, setTile] = useState<string>('')

  const dispatch = useDispatch()

  // const cards = useSelector((state: IAllCardState) => state.card)
  // const activeList = useSelector((state: IActiveListState) => state.activeList)

  // console.log('cards', cards)
  // console.log('active list', activeList)

  // const handleClick = (event: any) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  //   setTile('')
  // }

  const list = useSelector(
    (state: IActiveBoardListState) => state.activeBoardList
  )
  console.log('list', list)

  // const handleButtonClick = (listId: string) => {
  //   const requestBody: ICard = {
  //     id: uuidv4(),
  //     title: title,
  //     list: listId
  //   }
  //   dispatch(createCardThunk(requestBody))
  //   handleClose()
  // }

  useEffect(() => {
    return () => {
      // dispatch(addActiveBoards(board))
      dispatch(getListByBoardThunk(id))
      dispatch(getAllCardsThunk())
      // dispatch(getBoardByIdThunk(id))
    }
  }, [id, dispatch])
  return (
    <>
      <StyledListContainer maxWidth='lg'>
        {/* <h6>board id: {id}</h6> */}
        {list.map((list: IList) => (
          <>
            <BoardList list={list} />
          </>
        ))}
        <CreateList />
      </StyledListContainer>
    </>
  )
}

export default BoardPage
