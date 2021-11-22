import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Card } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const top = 0
const right = 90
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    minWidth: 100,
    minHeight: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: `translate(${right}%, ${top}%)`,
  },
  media: {
    height: 140,
  },
  button: { marginTop: 20 },
}))

const Cards: React.FC = () => {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  //   const [modalStyle] = React.useState(getModalStyle)
  //   const [open, setOpen] = React.useState(false)

  // const handleOpen = () => {
  //   setOpen(true)
  // }

  const handleClose = () => {
    setOpenModal(false)
    setTile('')
  }

  const handleButtonClick = () => {
    alert('button Clicked')
    setTile('')
  }
  const [openModal, setOpenModal] = useState(false)
  const [title, setTile] = useState<string>()
  const body = (
    <div className={classes.paper}>
      <h2 id='simple-modal-title'>Workspace Name</h2>
      <TextField
        id='filled-secondary'
        // label='Filled secondary'
        placeholder='Add board title'
        variant='filled'
        color='secondary'
        value={title}
        onChange={(e) => setTile(e.target.value)}
        fullWidth
      />
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={handleButtonClick}
      >
        Create Board
      </Button>
    </div>
  )

  return (
    <>
      <Card className={classes.root} onClick={() => setOpenModal(true)}>
        <CardActionArea>
          <CardContent>Create new Board</CardContent>
        </CardActionArea>
      </Card>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          {body}
        </Modal>
      )}
    </>
  )
}

export default Cards
