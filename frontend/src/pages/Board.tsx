import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  IActiveBoardState,
  IActiveWorkspaceState,
  IBoard,
} from '../redux/interfaces'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledContainer } from '../theme/uiComponents/layout/Container'
import CreateCard from '../components/CreateCard'
import { getBoardByWorkspaceThunk } from '../redux/thunk/getBoardByWorkspaceThunk'
import { useHistory } from 'react-router'

const Board: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const board = useSelector((state: IActiveBoardState) => state.activeBoard)

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  useEffect(() => {
    dispatch(getBoardByWorkspaceThunk(activeWorkspace.workspace_id))
  }, [activeWorkspace.workspace_id,  dispatch])

  return (
    <>
      <StyledContainer maxWidth='lg'>
        WorkSpace : {activeWorkspace.title}
        {board
          ? board.map((board: IBoard) => (
            <div onClick={()=>history.push(`/board/${board.board_id}`)}>
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
