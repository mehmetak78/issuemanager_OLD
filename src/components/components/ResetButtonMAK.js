import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    button: {
        padding: theme.spacing(1),
        //color: "red"
    }
}));

const ResetButtonMAK = props => {
    const classes = useStyles();
    return (
        <Button
            type="reset"
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.button}
            disabled={props.disabled}
        >
            {props.label}
        </Button>
    );
};

ResetButtonMAK.propTypes = {
    label: PropTypes.string.isRequired,
};


ResetButtonMAK.defaultProps = {
    disabled: false
};

export default ResetButtonMAK;
