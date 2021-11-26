import React from 'react'
import { StyledSearchIcon } from '../../theme/uiComponents/search/Icon'
import { StyledInputBase } from '../../theme/uiComponents/search/InputBase'
import { StyledSearch } from '../../theme/uiComponents/search/InputDiv'

const Search: React.FC = () => {
  return (
    <>
      <StyledSearch>
        <StyledSearchIcon />
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </StyledSearch>
    </>
  )
}

export default Search
