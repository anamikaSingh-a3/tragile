import { styled, Box } from '@material-ui/core';

export const StyledHeader = styled(Box)(({ theme }) => ({
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    '& .MuiChip-label': {
        fontSize: '20px'
    }
}))