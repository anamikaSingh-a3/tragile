import { styled } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'

const drawerWidth = 240

export const StyledContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  width: '80%',
  marginTop: 50,
  marginLeft: drawerWidth + theme.spacing(1),
  padding: theme.spacing(5),
  overflowX: 'visible'
}))

export const StyledContainerUser = styled(Container)(({ theme }) => ({
  marginTop: 60,
  flexGrow: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}))

export const StyledListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(3),
  overflowX: 'scroll',
  minheight: '10vh',
}))

export const StyledBoardContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(3),
  overflowX: 'scroll',
  minheight: '10vh',
}))

export const StyledDroppableList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: 10,
}))
