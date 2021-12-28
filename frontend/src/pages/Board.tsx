import { CardActionArea, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IActiveWorkspaceBoardState, IBoard } from 'tragile-board';
import { IActiveWorkspaceState } from 'tragile-workspace';

import Heading from '../components/common/Heading';
import CreateBoard from '../components/CreateBoard';
import SideDrawer from '../components/sideNavbar/SideDrawer';
import { getBoardByIdThunk } from '../redux/thunk/boardThunk/getBoardByIdThunk';
import { getBoardByWorkspaceThunk } from '../redux/thunk/boardThunk/getBoardByWorkspaceThunk';
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk';
import { getListByBoardThunk } from '../redux/thunk/listThunk/getListByBoardThunk';
import { StyledCard } from '../theme/uiComponents/Card';
import { StyledBoardContainer, StyledContainer } from '../theme/uiComponents/layout/Container';

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
      <SideDrawer />
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
