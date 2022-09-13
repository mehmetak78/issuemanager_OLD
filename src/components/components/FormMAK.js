import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles} from "@material-ui/core";


import SubmitResetButtonsMAK from "./SubmitResetButtonsMAK";
import SubmitButtonMAK from "./SubmitButtonMAK";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularIndeterminate from "./CircularIndeterminate";

export const NO_BUTTON = "ADD_RESET";
export const ADD_RESET_BUTTON = "ADD_RESET_BUTTON";
export const LOGIN_BUTTON = "LOGIN_CANCEL_BUTTON";


const useStyles = makeStyles(theme => ({
    card: {
        height: "100%",
        width: "100%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        textDecoration: "none",
        //border: "1px solid #eaeaea",
        borderRadius: "10px"
    },
    cardAction: {
        padding: theme.spacing(3),
    },

}));

const action = (type, disabled) => {
    switch (type) {
        case NO_BUTTON :
            return null;
        case ADD_RESET_BUTTON :
            return <SubmitResetButtonsMAK labelForSubmit="Add" labelForReset="Cancel" disabled={disabled}/>;
        case LOGIN_BUTTON :
            return <SubmitButtonMAK labelForSubmit="Login" disabled={disabled}/>;
        default:
            return <SubmitButtonMAK labelForSubmit="Submit" disabled={disabled}/>;
    }
};

const FormMAK = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                <CardContent>
                    <Typography variant="h1" className={classes.label}>
                        {props.label}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        {props.children}
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    {action(props.type, props.loading)}
                </CardActions>
                {props.loading ? <CircularIndeterminate/> : null}
            </form>
        </Card>

    );
};

FormMAK.propTypes = {
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

FormMAK.defaultProps = {
    loading: false
};

export default FormMAK;
