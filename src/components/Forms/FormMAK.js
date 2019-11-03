import React from 'react';
import PropTypes from 'prop-types';
import {Container, makeStyles} from "@material-ui/core";

import GridMAK from "../components/GridMAK";
import AddResetButtonsMAK from "../components/AddResetButtonsMAK";
import SubmitButtonMAK from "../components/SubmitButtonMAK";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

export const ADD_RESET = "ADD_RESET";

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
        marginTop: "20px",
        flexGrow: 1,
    },
    cardAction: {
        padding: "40px",
    }
}));

const action = (type) => {
    switch (type) {
        case ADD_RESET :
            return <AddResetButtonsMAK labelForAdd="Add" labelForReset="Cancel"/>
        default:
            return <SubmitButtonMAK label="Add"/>
    }
};

const FormMAK = props => {
    const classes = useStyles();
    return (
        <Container>
            <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h1" gutterBottom>
                            {props.label}
                        </Typography>
                        <GridMAK>
                            {props.children}
                        </GridMAK>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                        {action(props.type)}
                    </CardActions>
                </Card>
            </form>
        </Container>
    );
};

FormMAK.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default FormMAK;
