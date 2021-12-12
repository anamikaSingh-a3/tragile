import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { StyledCard } from '../../theme/uiComponents/Card'

interface CardProps {
  title: string
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  return (
    <>
      <StyledCard>
        <CardActionArea>
          <CardContent>{props.title}</CardContent>
        </CardActionArea>
      </StyledCard>
    </>
  )
}

export default Cards