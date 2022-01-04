import { Button } from '@material-ui/core';
import { fade, styled } from '@material-ui/core/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 20,
  margin: theme.spacing(0, 1, 1, 1),
  background: theme.palette.primary.light,
  color: theme.palette.common.white,
  '&:hover': {
    background: fade(theme.palette.primary.light, 0.95),
  },
}))