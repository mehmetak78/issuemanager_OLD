import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: "999",
        position: "fixed",
        bottom:"50px",
        right:"40px"
    },
}));

const actions = [
    {icon: <FileCopyIcon/>, name: 'Copy'},
    {icon: <SaveIcon/>, name: 'Save'},
    {icon: <ShareIcon/>, name: 'Share'},
    {icon: <FavoriteIcon/>, name: 'Like'},
];
export default function SpeedDialMAK() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    let subMenuClicked = false;

    const handleSubButtonClick  = (name) => {
        switch(name) {
            case "Copy": console.log("Copy Clicked"); break;
            case "Save": console.log("Save Clicked"); break;
            case "Share": console.log("Share Clicked"); break;
            case "Like": console.log("Like Clicked"); break;
            default:console.log("Wrong Button Clicked");
        }
        subMenuClicked = true;
        handleClose();
    };



    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        if (!subMenuClicked) {
            console.log("Main Clicked")
        }
        else {
            subMenuClicked = false;
        }
    };

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial"
                icon={<ShareIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                onClick={handleClick}
                open={open}
                direction="left"
            >
                {actions.map(action => (
                    <SpeedDialAction
                        title="Actions"
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleSubButtonClick(action.name)}
                    />
                ))}
            </SpeedDial>

        </div>
    );
}