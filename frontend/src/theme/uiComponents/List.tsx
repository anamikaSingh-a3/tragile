import { ListItem, styled } from "@material-ui/core";

export const StyledList = styled('span')(({ theme }) => ({
  width: 200,
  height: '100%',
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
  borderRadius: 5,
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
  },
  '& .MuiListItem-root' : {
    alignItems: 'left'
  }
})