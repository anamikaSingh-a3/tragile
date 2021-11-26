import { CardActionArea, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Card'
import { useSelector } from 'react-redux'
import { IActiveWorkspaceState, IBoard, IBoardState } from '../redux/interfaces'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledContainer } from '../components/layout/Container'
import api from '../api/board'

const Board: React.FC = () => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [array, setArray] = useState([])

  const board = useSelector((state: IBoardState) => state.boards)
  // const workspaces = useSelector(
  //   (state: IActiveWorkspaceState) => state.activeWorkspace.board
  // )
  const activeWorkspace = useSelector(
    (state: IActiveWorkspaceState) => state.activeWorkspace
  )
  useEffect(() => {
    const getAllWorkspaces = async () => {
      const workspaceBoard = await api.get(
        `/getByWorkspace/${activeWorkspace.workspace_id}`
      )

      console.log('Board_BY_Workspaces', workspaceBoard.data)
      setArray(workspaceBoard.data)
      // dispatch(addWrokspace(workspace.data))
      // setId(workspaceBoard.data.board_id)
      // setTitle(workspaceBoard.data.board_id)
    }
    getAllWorkspaces()
    setArray([])
    // const response = dispatch(getAllWorkspacesThunk)
    // setArray(response)
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
        {/* <StyledCard key={board.id}>
                <CardActionArea>
                  <CardContent>{board.title}</CardContent>
                </CardActionArea>
              </StyledCard> */}
        <Cards />
      </StyledContainer>
    </>
  )
}

export default Board

//theme
//resuable components
//layout -> header footer common
