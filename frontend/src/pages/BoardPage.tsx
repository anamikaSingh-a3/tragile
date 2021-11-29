import React from 'react'
import { useParams } from 'react-router'
import { StyledContainer } from '../theme/uiComponents/layout/Container'

interface IParams {
  id: string
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IParams>()
  return (
    <>
      <StyledContainer maxWidth='lg'>
        <h6>board id: {id}</h6>
      </StyledContainer>
    </>
  )
}

export default BoardPage
