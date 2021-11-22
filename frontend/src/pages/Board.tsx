import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Cards from '../components/Card'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: drawerWidth + theme.spacing(5),
    padding: theme.spacing(5),
  },
}))

const Board: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth='lg' className={classes.content}>
        <Cards />
      </Container>
    </>
  )
}
export default Board
