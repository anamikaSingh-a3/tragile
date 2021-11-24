import { styled } from '@material-ui/core/styles'

const top = 0
const right = 90
export const StyledModalContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  transform: `translate(${right}%, ${top}%)`,
}))
