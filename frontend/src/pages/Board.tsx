import { CardActionArea, CardContent } from '@material-ui/core'
import React from 'react'
import Cards from '../components/Card'
import { useSelector } from 'react-redux'
import { IActiveWorkspaceState, IBoard, IBoardState } from '../redux/interfaces'
import { StyledCard } from '../style/styledComponents/Card'
import { StyledContainer } from '../style/styledComponents/Container'

const Board: React.FC = () => {
  const board = useSelector((state: IBoardState) => state.boards)
  const workspaces = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace.board
  )
  const workspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace.title
  )

  return (
    <>
      <StyledContainer maxWidth='lg'>
        WorkSpace : {workspace}
        {workspaces
          ? workspaces.map((board: IBoard) => (
              <StyledCard key={board.id}>
                <CardActionArea>
                  <CardContent>{board.title}</CardContent>
                </CardActionArea>
              </StyledCard>
            ))
          : ''}
        <Cards />
      </StyledContainer>
    </>
  )
}

export default Board
