import { Container, CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { IActiveBoardState } from 'tragile-board';
import { IActiveBoardListState, IList } from 'tragile-list';
import { ILogoutState } from 'tragile-user';

import BoardList from '../components/BoardList';
import Heading from '../components/common/Heading';
import InputContainer from '../components/createComponent/InputContainer';
import SideDrawer from '../components/sideNavbar/SideDrawer';
import { getAllCardsThunk } from '../redux/thunk/cardThunk/getAllCardThunk';
import updateCardListIdThunk from '../redux/thunk/cardThunk/updateCardListIdThunk';
import { getListByBoardThunk } from '../redux/thunk/listThunk/getListByBoardThunk';
import { StyledButton } from '../theme/uiComponents/Button';
import { StyledContainer, StyledContainerUser, StyledListContainer } from '../theme/uiComponents/layout/Container';
import { StyledPaperUser } from '../theme/uiComponents/layout/Paper';

interface IParams {
  id: string
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IParams>()
  const dispatch = useDispatch()
  const history = useHistory()
  const list = useSelector(
    (state: IActiveBoardListState) => state.activeBoardList
  )
  const activeBoard = useSelector((state: IActiveBoardState) => state.activeBoard)

  const logout = useSelector((state: ILogoutState) => state.logout)

  useEffect(() => {
    return () => {
      dispatch(getListByBoardThunk(id))
      dispatch(getAllCardsThunk())
    }
  }, [id, dispatch])

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result

    if (!destination) {
      return;
    }
    dispatch(
      updateCardListIdThunk(
        { card_id: Number(draggableId), list_id: Number(destination.droppableId) }
      )
    )
  }
  return (
    <>
      {logout ?

    <>
      <SideDrawer />
    <StyledContainer maxWidth='lg'>
      <Heading type={'Board '} value={activeBoard.title} />
      <StyledListContainer maxWidth='lg'>
        <DragDropContext
          onDragEnd={(result, provided) => {
            onDragEnd(result)
          }}
        >
          <Droppable droppableId='app' type='list' direction='horizontal'>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((list: IList, index: number) => (
                  <BoardList list={list} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <InputContainer type='list' listId={''} />
      </StyledListContainer>
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

export default BoardPage
