import AppsIcon from '@material-ui/icons/Apps';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import React from 'react';
import { useLocation, useHistory } from 'react-router'
import { StyledButton } from '../../theme/uiComponents/Button'


import { StyledAvatar } from '../../theme/uiComponents/toolbar/Avatar';
import { StyledDropDownButton } from '../../theme/uiComponents/toolbar/DropDown';
import { StyledIconButton } from '../../theme/uiComponents/toolbar/IconButton';
import { StyledTitle } from '../../theme/uiComponents/toolbar/Title';
import { StyledToolbar } from '../../theme/uiComponents/toolbar/ToolbarContainer';
import Search from '../common/Search';

const options = ['Workspaces', 'Recent', 'Starred', 'Templates']

const TopNavbar: React.FC = () => {
const location = useLocation()
const history = useHistory()
const onSignUpHandler = () => {
  history.push('/sign')
}

const onSignInHandler = () => {
  history.push('/signIn')
}

  if (location.pathname === "/signIn" || location.pathname === "/signUp/") {
    return (<StyledToolbar> <StyledIconButton edge='start' color='inherit'>
      <AppsIcon />
      <AssessmentIcon />
      <StyledTitle variant='h6' noWrap>
        Tragile
      </StyledTitle>
    </StyledIconButton>
    </StyledToolbar>)
  } else
  return (
    <>
      <StyledToolbar>
        <StyledIconButton edge='start' color='inherit'>
          <AppsIcon />
          <AssessmentIcon />
          <StyledTitle variant='h6' noWrap>
            Tragile
          </StyledTitle>
        </StyledIconButton>
        {options.map((option) => (
          <StyledDropDownButton
            aria-controls='customized-menu'
            aria-haspopup='true'
            color='primary'
            key={option}
          >
            {option}
          </StyledDropDownButton>
        ))}
        <Search />
        <StyledIconButton edge='end' color='inherit'>
          <ErrorOutlineIcon />
          <NotificationsNoneIcon />
          <StyledAvatar>
            <h6> AS </h6>
          </StyledAvatar>
        </StyledIconButton>
{
  location.pathname !== '/signIn' &&
  location.pathname !== '/signUp/:payload' ? (
    <>
      <StyledButton onClick={onSignUpHandler}>SignUP</StyledButton>
      <StyledButton onClick={onSignInHandler}>SignIn</StyledButton>
    </>
  ) : (
    <></>
  )
}

      </StyledToolbar>
    </>
  )
}

export default TopNavbar
