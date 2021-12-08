import { ListItem, styled } from "@material-ui/core";

export const StyledList = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  height: '100%',
  margin: theme.spacing(5),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    outline: 'none',
  },
  '&.button:focus': {
    outline: 'none',                                                                   
  }
}))

export const StyledListItem = styled(ListItem)({
  minHeight: 150,
  minWidth: 250,
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
  // min-height: 150px;
  // display: flex;
  // flex-direction: column;
  // flex-wrap: nowrap;
  // align-content: space-between;
  // justify-content: space-between;
  // align-items: center;
  // min-width: 250px;
})