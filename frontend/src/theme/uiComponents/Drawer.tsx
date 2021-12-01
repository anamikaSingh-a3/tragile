import { Drawer } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const drawerWidth = 240

export const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    marginLeft: 'inherit',
    paddingLeft: 20,
    top: 55,
  },
})
