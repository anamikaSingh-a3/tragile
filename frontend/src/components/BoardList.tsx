import { Button, List, Menu, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledButton } from '../theme/uiComponents/Button'
import { StyledCard } from '../theme/uiComponents/Card'
import { StyledList, StyledListItem } from '../theme/uiComponents/List'
import CloseIcon from '@material-ui/icons/Close'
import { IActiveBoardListState, IActiveListState, IAllCardState, ICard, IList } from '../redux/interfaces'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addActiveList } from '../redux/action'
import createCardThunk from '../redux/thunk/createCardThunk'
import { v4 as uuidv4 } from 'uuid'

interface IParams {
    id: string
}

interface IBoardListProps {
    list: IList
}
const BoardList: React.FC<IBoardListProps> = (props: IBoardListProps) => {
    const { id } = useParams<IParams>()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [title, setTile] = useState<string>('')

    const dispatch = useDispatch()

    const cards = useSelector((state: IAllCardState) => state.card)
    const activeList = useSelector((state: IActiveListState) => state.activeList)
    const list = useSelector(
        (state: IActiveBoardListState) => state.activeBoardList
    )
    console.log('list', list)
    console.log('cards', cards)
    console.log('active list', activeList)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setTile('')
    }

    const handleButtonClick = (listId: string) => {
        const requestBody: ICard = {
            id: uuidv4(),
            title: title,
            list: listId
        }
        dispatch(createCardThunk(requestBody))
        handleClose()
    }

    return (
        <>
            <StyledList onClick={() => dispatch(addActiveList(props.list))}>
                <List component='nav' aria-label='main mailbox folders'>
                    <StyledListItem button>
                        List Title: {props.list.title}
                        {cards.map((card: ICard) =>
                            props.list.list_id == card.list ? (
                                <StyledCard>
                                    title: {card.title}
                                    {/* / list id: {list.list_id}/ card
                        listid: {card.list} */}
                                </StyledCard>
                            ) : (
                                ``
                            )
                        )}
                        <Button
                            aria-controls='simple-menu'
                            aria-haspopup='true'
                            onClick={handleClick}
                            variant='contained'
                        >
                            Create Card
                        </Button>
                        <Menu
                            id='simple-menu'
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <TextField
                                    id='filled-secondary'
                                    placeholder='Add card title'
                                    variant='filled'
                                    color='secondary'
                                    value={title}
                                    onChange={e => setTile(e.target.value)}
                                    fullWidth
                                />
                            </MenuItem>
                            <StyledButton
                                variant='contained'
                                color='primary'
                                onClick={() => handleButtonClick(activeList.list_id)}
                                disabled={!title}
                            >
                                Create card
                            </StyledButton>
                            <CloseIcon onClick={handleClose} />
                        </Menu>
                    </StyledListItem>
                </List>
            </StyledList>
        </>
    )
}

export default BoardList