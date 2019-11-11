import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles, TextField} from "@material-ui/core";

import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
    formHelperText: {
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(3),
        color: theme.palette.error.main
    },
}));

const TextFieldMAK = props => {
    const classes = useStyles();
    const {field} = props;
    return (
        !field.hidden ?
            <Grid item {...field.size}>
                <TextField
                    {...field}
                  //  autoComplete='off'
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    error={props.errorMessage ? props.errorMessage.length > 0 : false}
                    //   helperText={props.errorMessage}
                    color="primary"
                    onChange={props.onChange}
                />

                <FormHelperText className={classes.formHelperText}>{props.errorMessage}</FormHelperText>

                {props.children}
            </Grid>
            :
            null
    );
};

TextFieldMAK.propTypes = {
    field: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default TextFieldMAK;
