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

const Board: React.FC = () => {
  const dispatch = useDispatch()

  const board = useSelector((state: IActiveBoardState) => state.activeBoard)

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  useEffect(() => {
    dispatch(getBoardByWorkspaceThunk(activeWorkspace.workspace_id))
  }, [activeWorkspace.workspace_id, dispatch])

  return (
    <>
      <StyledContainer maxWidth='lg'>
        WorkSpace : {activeWorkspace.title}
        {board
          ? board.map((board: IBoard) => (
              <StyledCard key={board.id}>
                <CardActionArea>
                  <CardContent>{board.title}</CardContent>
                </CardActionArea>
              </StyledCard>
            ))
          : 'No boards till now'}
        <CreateCard />
      </StyledContainer>
    </>
  )
}

export default Board
