import { styled } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { Height } from '@material-ui/icons'

const drawerWidth = 240

export const StyledContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  paddingLeft: drawerWidth + theme.spacing(5),
  padding: theme.spacing(5),
}))

export const StyledListContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flexStart',
  paddingLeft: drawerWidth + theme.spacing(5),
  margin: theme.spacing(5),
  overflowX: 'scroll',
  minheight: '10vh'
}))