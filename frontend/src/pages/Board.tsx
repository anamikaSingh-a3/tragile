import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledContainer } from '../theme/uiComponents/layout/Container'
import CreateCard from '../components/CreateBoard'
import { getBoardByWorkspaceThunk } from '../redux/thunk/getBoardByWorkspaceThunk'
import { useHistory } from 'react-router'
import { getListByBoardThunk } from '../redux/thunk/getListByBoardThunk'
import { getBoardByIdThunk } from '../redux/thunk/getBoardByIdThunk'
import { IActiveBoardState, IBoard } from 'tragile-board'
import { IActiveWorkspaceState } from 'tragile-workspace'

const Board: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const board = useSelector((state: IActiveBoardState) => state.activeWorkspaceBoard)

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  const boardHandler = (board: IBoard) =>{
    history.push(`/board/${board.board_id}`)
    dispatch(getBoardByIdThunk(board.board_id))
    dispatch(getListByBoardThunk(board.board_id))
  }
  useEffect(() => {
    dispatch(getBoardByWorkspaceThunk(activeWorkspace.workspace_id))
  }, [activeWorkspace.workspace_id,  dispatch])

  return (
    <>
      <StyledContainer maxWidth='lg'>
        WorkSpace : {activeWorkspace.title}
        {board
          ? board.map((board: IBoard) => (
            <div onClick={()=>boardHandler(board)}>
              <StyledCard key={board.board_id}>
                <CardActionArea>
                  <CardContent>{board.title}</CardContent>
                </CardActionArea>
              </StyledCard>
            </div>
            ))
          : 'No boards till now'}
        <CreateCard />
      </StyledContainer>
    </>
  )
}

export default Board