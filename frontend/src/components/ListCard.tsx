import { makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CardPage from '../pages/CardPage'
import { ICard } from '../redux/interfaces';
import { StyledCard } from '../theme/uiComponents/Card'
import { addActiveCard } from '../redux/action/cardActions';
import { Draggable } from 'react-beautiful-dnd';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

interface ListCardProps {
    card: ICard
    index: number
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ListCard = (props: ListCardProps) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const dispatch = useDispatch()
    const handleCloseCardModal = () => {
        setOpen(false);

    };
    const onCardHandler = () => {
        dispatch(addActiveCard(props.card))
        setOpen(true);


    }

    return (
        <Draggable draggableId={props.card.card_id.toString()} index={props.index}>
            {(provided) => (

                <StyledCard onClick={() => onCardHandler()} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    title: {props.card.title}

                </StyledCard>
            )}
            <Modal
                open={open}
                onClose={handleCloseCardModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>

                    <CardPage card={props.card} />
                </div>
            </Modal>
        </Draggable>
    )
}
export default ListCard
