import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        //      marginLeft: theme.spacing(1),
        //    marginRight: theme.spacing(1),
    },
    input: {
        margin:0,
        padding:0
    }
}));

const TextFieldMAK = props => {
    const classes = useStyles();
    const {field} = props;
    return (
        !field.hidden ?
        <Grid item {...field.size}>
            <TextField
                {...field}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                error={props.errorMessage ?props.errorMessage.length > 0:false}
                helperText={props.errorMessage}
                color="primary"
                InputProps={{className:classes.input}}
                onChange={props.onChange}
            />
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
