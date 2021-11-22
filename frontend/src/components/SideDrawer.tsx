import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AssessmentIcon from '@material-ui/icons/Assessment'
import { useHistory } from 'react-router'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginLeft: 'inherit',
    width: drawerWidth,
    marginTop: '55px',
  },
  sideBarHomePage: {
    paddingLeft: 60,
  },
}))

const SideDrawer: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
      {/* <Container maxWidth='sm'> */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <Divider />
        <List>
          <ListItem
            className={classes.sideBarHomePage}
            onClick={() => history.push('/board')}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary='Board' />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default SideDrawer
