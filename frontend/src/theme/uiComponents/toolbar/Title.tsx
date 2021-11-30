import { styled, Typography } from '@material-ui/core'

export const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}))
