import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    statusBar: {
        //top: 'auto',
        position: "fixed",
        bottom: 0,
        zIndex: "888",
        width:"100%",
        textAlign:"left",
        backgroundColor: theme.palette.primary.light
    },
    noMarginPadding: {
        margin: 0,
        padding: 0,
        paddingLeft: theme.spacing(1),
        color: theme.palette.common.white,
    }
}));

const BottomBar = (props) => {
    const classes = useStyles();

    const {statusMessage} = props.layout;
    const {crudState, formPath, dataPath} = props.data;

    return (
        <div color="primary" className={classes.statusBar}>
            <Typography variant="caption" display="block"  className={classes.noMarginPadding}>
                <Typography variant="body1" display="inline" className={classes.noMarginPadding}>crudSatate:</Typography>{crudState}{" "}
                <Typography variant="body1" display="inline" className={classes.noMarginPadding}>formPath:</Typography>{formPath}{" "}
                <Typography variant="body1" display="inline" className={classes.noMarginPadding}>dataPath:</Typography>{dataPath}{" "}
                <Typography variant="body1" display="inline" className={classes.noMarginPadding}>statusMessage:</Typography>{statusMessage}{" "}
            </Typography>
        </div>
    );
};

const mapStateToProps = state => (
    {
        layout: state.layout,
        data: state.data
    }
);

export default connect(mapStateToProps, null)(BottomBar);

