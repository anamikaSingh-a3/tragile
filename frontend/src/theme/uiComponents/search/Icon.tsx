import { styled } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

