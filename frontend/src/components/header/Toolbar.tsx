import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Search from '../common/Search'
import { StyledToolbar } from '../../theme/uiComponents/toolbar/ToolbarContainer'
import { StyledIconButton } from '../../theme/uiComponents/toolbar/IconButton'
import { StyledDropDownButton } from '../../theme/uiComponents/toolbar/DropDown'
import { StyledAvatar } from '../../theme/uiComponents/toolbar/Avatar'
import { StyledTitle } from '../../theme/uiComponents/toolbar/Title'

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
