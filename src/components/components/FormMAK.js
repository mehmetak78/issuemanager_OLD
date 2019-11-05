import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles} from "@material-ui/core";


import AddResetButtonsMAK from "./AddResetButtonsMAK";
import SubmitButtonMAK from "./SubmitButtonMAK";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularIndeterminate from "./CircularIndeterminate";

export const ADD_RESET = "ADD_RESET";

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
    cardAction: {
        padding: theme.spacing(3),
    }
}));

const action = (type, disabled) => {
    switch (type) {
        case ADD_RESET :
            return <AddResetButtonsMAK labelForAdd="Add" labelForReset="Cancel" disabled={disabled}/>
        default:
            return <SubmitButtonMAK label="Add"/>
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
                        justify="flex-start"
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
    handleSubmit: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

FormMAK.defaultProps = {
    loading: false
};

export default FormMAK;
