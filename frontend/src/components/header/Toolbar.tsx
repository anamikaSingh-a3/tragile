import AppsIcon from '@material-ui/icons/Apps';
import AssessmentIcon from '@material-ui/icons/Assessment';
import React from 'react';
import { useHistory } from 'react-router'
import { StyledButton } from '../../theme/uiComponents/Button';
import { StyledIconButton } from '../../theme/uiComponents/toolbar/IconButton';
import { StyledTitle } from '../../theme/uiComponents/toolbar/Title';
import { StyledToolbar } from '../../theme/uiComponents/toolbar/ToolbarContainer';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/thunk/userThunk/logoutThunk';
import { ILogoutState } from 'tragile-user';

const TopNavbar: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const logout = useSelector((state: ILogoutState) => state.logout)
  const logoutHandler = () => {
    dispatch(logoutThunk())
    history.push('/')
  }
  return (
    <>
      <StyledToolbar>
        <StyledIconButton edge='start' color='inherit'>
          <AppsIcon />
          <AssessmentIcon />
          <StyledTitle variant='h6' noWrap onClick={() => history.push('/')}>
            Tragile
          </StyledTitle>
          {logout ?
            <StyledButton onClick={logoutHandler}>
              Logout
            </StyledButton>
            : <></>}
        </StyledIconButton>
      </StyledToolbar>
    </>
  )
}

export default TopNavbar
