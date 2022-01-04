import { Paper } from '@material-ui/core';
import { fade, styled } from '@material-ui/core/styles';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 170,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  border: 10,
  background: theme.palette.grey[100],
  '&:hover': {
    backgroundColor: fade(theme.palette.grey[200], 0.85)
  }
}))

export const StyledPaperUser = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))