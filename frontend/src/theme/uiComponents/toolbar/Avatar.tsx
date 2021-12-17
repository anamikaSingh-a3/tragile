import { Avatar, styled } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  width: theme.spacing(4),
  height: theme.spacing(4),
}))
