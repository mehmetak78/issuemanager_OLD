import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    containerMAK: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
   //     border: "2px red solid",
        height: "calc(100% - 50px)",
        textAlign: "center"
    }
}));


const ContainerMAK = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.containerMAK}>
            {props.children}
        </div>
    );
};

export default ContainerMAK;
