import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  IActiveWorkspace,
  IActiveWorkspaceState,
  IBoard,
  IBoardState,
} from '../redux/interfaces'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledContainer } from '../components/layout/Container'
import api from '../api/board'

const Workspace: React.FC = () => {
  // const workspaces = useSelector((state: IActiveWorkspace) => state.board)

  const [array, setArray] = useState([])
  const board = useSelector((state: IBoardState) => state.boards)

  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )

  // useEffect(() => {
  //   const getAllWorkspaces = async () => {
  //     const workspaceBoard = await api.get(
  //       `/getByWorkspace/${activeWorkspace.id}`
  //     )

  //     console.log('Board_BY_Workspaces', workspaceBoard.data)
  //     // dispatch(addWrokspace(workspace.data))
  //     setArray(workspaceBoard.data)
  //   }
  //   getAllWorkspaces()
  //   // const response = dispatch(getAllWorkspacesThunk)
  //   // setArray(response)
  // }, [])

  return (
    <>
      <StyledContainer maxWidth='lg'>
        {/* {array.map((board: IBoard) => (
          <StyledCard key={board.id}>
            cards
            <CardActionArea>
              <CardContent>{board.title}</CardContent>
            </CardActionArea>
          </StyledCard>
        ))} */}
      </StyledContainer>
    </>
  )
}

export default Workspace
