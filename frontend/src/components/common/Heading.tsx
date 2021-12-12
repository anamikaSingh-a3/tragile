import { Chip } from '@material-ui/core'
import React from 'react'
import { StyledHeader } from '../../theme/uiComponents/layout/Header'

interface IHeadingProps {
  type: string
  value: string
}

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  return (
    <>
      <StyledHeader>
        <Chip
          label={`${props.type}:  ${props.value}`}
          color='primary'
          variant='outlined'
        />
      </StyledHeader>
    </>
  )
}

export default Heading
