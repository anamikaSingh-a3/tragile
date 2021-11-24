import { CardActionArea, CardContent } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { IActiveWorkspace, IBoard } from '../redux/interfaces'
import { StyledCard } from '../style/styledComponents/Card'
import { StyledContainer } from '../style/styledComponents/Container'

const Workspace: React.FC = () => {
  const workspaces = useSelector((state: IActiveWorkspace) => state.board)
  return (
    <>
      <StyledContainer maxWidth='lg'>
        {workspaces.map((board: IBoard) => (
          <StyledCard key={board.id}>
            cards
            <CardActionArea>
              <CardContent>{board.title}</CardContent>
            </CardActionArea>
          </StyledCard>
        ))}
      </StyledContainer>
    </>
  )
}

export default Workspace
