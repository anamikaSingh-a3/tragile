import React, { useState } from 'react'
import { Typography, Collapse, Box } from '@material-ui/core'
import InputCard from './InputCard'
import { StyledPaper } from '../../theme/uiComponents/layout/Paper'

interface IInputContainerProps {
  listId: string
  type: string
}

const InputContainer: React.FC<IInputContainerProps> = (
  props: IInputContainerProps
) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box component='span'>
        <Collapse in={open}>
          <InputCard
            setOpen={setOpen}
            listId={props.listId}
            type={props.type}
          />
        </Collapse>
        <Collapse in={!open}>
          <StyledPaper elevation={0} onClick={() => setOpen(!open)}>
            <Typography>
              {props.type === 'card' ? '+ Add a Card' : '+ Add List'}
            </Typography>
          </StyledPaper>
        </Collapse>
      </Box>
    </>
  )
}
export default InputContainer
