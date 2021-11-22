import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { alpha, makeStyles } from '@material-ui/core/styles'
import AppsIcon from '@material-ui/icons/Apps'
import AssessmentIcon from '@material-ui/icons/Assessment'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '10px',
  },
  menuButton: {
    paddingRight: '10px',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    marginRight: '10px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginRight: '10px',
    // position: 'fixed',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  dropDownButton: {
    color: 'white',
    textTransform: 'none',
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <AppsIcon className={classes.menuButton} />
            <AssessmentIcon />
            <Typography className={classes.title} variant='h6' noWrap>
              Tragile
            </Typography>
          </IconButton>
          <div>
            <Button
              aria-controls='customized-menu'
              aria-haspopup='true'
              color='primary'
              onClick={handleClick}
              className={classes.dropDownButton}
            >
              Workspaces
            </Button>
            <Menu
              id='customized-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: '50px' }}
            >
              <MenuItem>
                {/* <ListItemIcon>
                  <SendIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Sent mail' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <DraftsIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Drafts' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <InboxIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Inbox' />
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls='customized-menu'
              aria-haspopup='true'
              color='primary'
              onClick={handleClick}
              className={classes.dropDownButton}
            >
              Recent
            </Button>
            <Menu
              id='customized-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: '50px' }}
            >
              <MenuItem>
                {/* <ListItemIcon>
                  <SendIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Sent mail' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <DraftsIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Drafts' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <InboxIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Inbox' />
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls='customized-menu'
              aria-haspopup='true'
              color='primary'
              onClick={handleClick}
              className={classes.dropDownButton}
            >
              Starred
            </Button>
            <Menu
              id='customized-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: '50px' }}
            >
              <MenuItem>
                {/* <ListItemIcon>
                  <SendIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Sent mail' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <DraftsIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Drafts' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <InboxIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Inbox' />
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls='customized-menu'
              aria-haspopup='true'
              color='primary'
              onClick={handleClick}
              className={classes.dropDownButton}
            >
              Templates
            </Button>
            <Menu
              id='customized-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: '50px' }}
            >
              <MenuItem>
                {/* <ListItemIcon>
                  <SendIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Sent mail' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <DraftsIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Drafts' />
              </MenuItem>
              <MenuItem>
                {/* <ListItemIcon>
                  <InboxIcon fontSize='small' />
                </ListItemIcon> */}
                <ListItemText primary='Inbox' />
              </MenuItem>
            </Menu>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            edge='end'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <ErrorOutlineIcon className={classes.menuButton} />
            <NotificationsNoneIcon className={classes.menuButton} />
            <Avatar className={classes.avatar}>
              <h6> AS </h6>
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
