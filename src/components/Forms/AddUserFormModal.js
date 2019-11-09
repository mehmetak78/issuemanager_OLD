import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import UserForm from "./AddUserForm";

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: "80%",
        height: "80%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid green',
        boxShadow: theme.shadows[5],
        paddingBottom: theme.spacing(2),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);



    const handleClose = () => {
        props.history.push("/home");
        setOpen(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                   <UserForm/>
                </div>
            </Modal>
        </div>
    );
}