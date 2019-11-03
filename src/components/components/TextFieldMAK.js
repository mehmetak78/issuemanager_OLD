import React from 'react';
import {Grid, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    textField: {
        //      marginLeft: theme.spacing(1),
        //    marginRight: theme.spacing(1),
    },
}));

const TextFieldMAK = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <TextField
                {...props}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                color="primary"
            />
            {props.children}
        </Grid>
    );
};

TextFieldMAK.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextFieldMAK;

