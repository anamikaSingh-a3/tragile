import { Card } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  minWidth: 150,
  minHeight: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: theme.palette.grey[50],
  margin: theme.spacing(1),
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  '& .MuiCardActionArea-root': {
    height: '100%',
  },
  '& .MuiCardActionArea-focusHighlight': {
    backgroundColor: 'inherit'
  }
}))
