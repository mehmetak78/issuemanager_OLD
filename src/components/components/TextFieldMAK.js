import React from 'react';
import {TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridItemMAK from "./GridItemMAK";

const TextFieldMAK = props => {

    const useStyles = makeStyles(theme => ({
        textField: {
            //      marginLeft: theme.spacing(1),
            //    marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <GridItemMAK>
            <TextField
                {...props}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                color="primary"
            />
            {props.children}
        </GridItemMAK>
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

