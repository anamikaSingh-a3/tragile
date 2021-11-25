import React from 'react'
import { alpha } from '@material-ui/core/styles'
import { styled } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const StyledSearch = styled('div')(({ theme }) => ({
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
}))

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
    marginRight: '10px',
    padding: theme.spacing(1, 1, 1, 0),
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
}))
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
