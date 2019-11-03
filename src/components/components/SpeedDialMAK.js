import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    root: {
        transform: 'translateZ(0px)',

    },

    speedDial: {
        position: 'relative',
    //    marginTop: "40px",
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {

        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {

        },
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


    const handleSubButtonClick  = (name) => {
        switch(name) {
            case "Copy": console.log("Copy Clicked"); break;
            case "Save": console.log("Save Clicked"); break;
            case "Share": console.log("Share Clicked"); break;
            case "Like": console.log("Like Clicked"); break;
            default:console.log("Wrong Button Clicked");
        }
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        console.log("Main Clicked")
    };

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.speedDial}

                icon={<ShareIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                onClick={handleClick}
                open={open}
                direction="up"
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