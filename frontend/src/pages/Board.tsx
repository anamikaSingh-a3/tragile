import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IActiveWorkspaceState, IBoard, IBoardState } from '../redux/interfaces'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledContainer } from '../theme/uiComponents/layout/Container'
import api from '../api/board'
import CreateCard from '../components/CreateCard'

const Board: React.FC = () => {
  const [array, setArray] = useState([])

  const board = useSelector((state: IBoardState) => state.boards)

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )
  useEffect(() => {
    const getAllWorkspaces = async () => {
      const workspaceBoard = await api.get(
        `/getByWorkspace/${activeWorkspace.workspace_id}`
      )
      setArray(workspaceBoard.data)
    }
    getAllWorkspaces()
    setArray([])
  }, [activeWorkspace, board])
  return (
    <>
      <StyledContainer maxWidth='lg'>
        WorkSpace : {activeWorkspace.title}
        {array
          ? array.map((board: IBoard) => (
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
