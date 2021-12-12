import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledBoardContainer, StyledContainer } from '../theme/uiComponents/layout/Container'
import { getBoardByWorkspaceThunk } from '../redux/thunk/getBoardByWorkspaceThunk'
import { useHistory } from 'react-router'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import { getBoardByIdThunk } from '../redux/thunk/getBoardByIdThunk'
import { IActiveWorkspaceBoardState, IBoard } from 'tragile-board'
import { IActiveWorkspaceState } from 'tragile-workspace'
import { getAllCardsThunk } from '../redux/thunk/getAllCardThunk'
import CreateBoard from '../components/CreateBoard'
import Heading from '../components/common/Heading'

const Board: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const board = useSelector(
    (state: IActiveWorkspaceBoardState) => state.activeWorkspaceBoard
  )

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  const boardHandler = (board: IBoard) => {
    history.push(`/board/${board.board_id}`)
    dispatch(getBoardByIdThunk(board.board_id))
    dispatch(getListByBoardThunk(board.board_id))
    dispatch(getAllCardsThunk())
  }
  useEffect(() => {
    dispatch(getBoardByWorkspaceThunk(activeWorkspace.workspace_id))
  }, [activeWorkspace.workspace_id, dispatch])

  return (
    <>
      <StyledContainer maxWidth='lg'>
        <Heading type={'WorkSpace'} value={activeWorkspace.title} />
        <StyledBoardContainer maxWidth='lg'>
          {board
            ? board.map((board: IBoard) => (
                <div onClick={() => boardHandler(board)}>
                  <StyledCard key={board.board_id}>
                    <CardActionArea>
                      <CardContent>{board.title}</CardContent>
                    </CardActionArea>
                  </StyledCard>
                </div>
              ))
            : 'No boards till now'}
          <CreateBoard />
        </StyledBoardContainer>
      </StyledContainer>
    </>
  )
}

export default Board
