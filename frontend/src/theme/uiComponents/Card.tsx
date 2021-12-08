import { styled } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  minWidth: 150,
  minHeight: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.grey[100],
  margin: theme.spacing(1),
  marginTop: theme.spacing(5),
  '& .MuiCardActionArea-root': {
    height: '100%',
  },
  '& .MuiCardActionArea-focusHighlight': {
    backgroundColor: 'inherit'
  }
}))
