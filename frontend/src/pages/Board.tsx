import { CardActionArea, CardContent, Container, CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IActiveWorkspaceBoardState, IBoard } from 'tragile-board';
import { ILogoutState } from 'tragile-user';
import { IActiveWorkspaceState } from 'tragile-workspace';

import Heading from '../components/common/Heading';
import CreateBoard from '../components/CreateBoard';
import SideDrawer from '../components/sideNavbar/SideDrawer';
import { getBoardByIdThunk } from '../redux/thunk/boardThunk/getBoardByIdThunk';
import { getBoardByWorkspaceThunk } from '../redux/thunk/boardThunk/getBoardByWorkspaceThunk';
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk';
import { getListByBoardThunk } from '../redux/thunk/listThunk/getListByBoardThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledCard } from '../theme/uiComponents/Card';
import { StyledBoardContainer, StyledContainer, StyledContainerUser } from '../theme/uiComponents/layout/Container';
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper';

const Board: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = useSelector((state: ILogoutState) => state.logout)

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
      {logout ?
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
        </> : <>
          <StyledContainerUser maxWidth='lg'>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <StyledPaperUser elevation={3} >
                <Typography component='h1' variant='h5'>
                  Please login or sign up..
                  <StyledButton onClick={() => history.push('/')}>
                    Go to gome
                  </StyledButton>
                  {/* <Box>
                                        <StyledButton onClick={onSignUpHandler}>SignUP</StyledButton>
                                        <StyledButton onClick={onSignInHandler}>SignIn</StyledButton>
                                    </Box> */}
                </Typography>
              </StyledPaperUser>
            </Container>
          </StyledContainerUser>

        </>}
    </>
  )
}

export default Board
