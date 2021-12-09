import { ListItem, styled } from "@material-ui/core";

export const StyledList = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    outline: 'none',
  },
  '&.button:focus': {
    outline: 'none',                                                                   
  }
}))

export const StyledListItem = styled(ListItem)({
  minWidth: 200,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'spaceBetween',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
  '&:hover': {
    outline: 'none',
  },
  '&.button:focus': {
    outline: 'none',                                                                   
  }
})