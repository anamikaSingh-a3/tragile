import React from 'react'
import { IconButton, styled, Typography } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import AppsIcon from '@material-ui/icons/Apps'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Button from '@material-ui/core/Button'
import Search from '../../components/Search'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'

const StyledToolbar = styled(Toolbar)({
  minHeight: '10px',
})

const StyledIconButton = styled(IconButton)({
  paddingRight: '10px',
})

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}))

const StyledDropDownButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
})

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  width: theme.spacing(4),
  height: theme.spacing(4),
}))

const options = ['Workspaces', 'Recent', 'Starred', 'Templates']

const TopNavbar: React.FC = () => {
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
      </StyledToolbar>
    </>
  )
}

export default TopNavbar
