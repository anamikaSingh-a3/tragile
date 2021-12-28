import AppsIcon from '@material-ui/icons/Apps';
import AssessmentIcon from '@material-ui/icons/Assessment';
import React from 'react';
import { useHistory } from 'react-router'
import { StyledIconButton } from '../../theme/uiComponents/toolbar/IconButton';
import { StyledTitle } from '../../theme/uiComponents/toolbar/Title';
import { StyledToolbar } from '../../theme/uiComponents/toolbar/ToolbarContainer';

const TopNavbar: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <StyledToolbar>
        <StyledIconButton edge='start' color='inherit'>
          <AppsIcon />
          <AssessmentIcon />
          <StyledTitle variant='h6' noWrap onClick={() => history.push('/')}>
            Tragile
          </StyledTitle>
        </StyledIconButton>
      </StyledToolbar>
    </>
  )
}

export default TopNavbar
