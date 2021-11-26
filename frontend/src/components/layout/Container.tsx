import { styled } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const drawerWidth = 240

export const StyledContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexWrap: 'wrap',
  paddingLeft: drawerWidth + theme.spacing(5),
  padding: theme.spacing(5),
}))
