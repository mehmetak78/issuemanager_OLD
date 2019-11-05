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

const SubmitButtonMAK = props => {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={props.disabled}
            className={classes.button}
        >
            {props.label}
        </Button>
    );
};

SubmitButtonMAK.propTypes = {
    label: PropTypes.string.isRequired,
};

SubmitButtonMAK.defaultProps = {
    disabled: false
};

export default SubmitButtonMAK;
