import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from "@material-ui/core";
import SubmitButtonMAK from "./SubmitButtonMAK";
import ResetButtonMAK from "./ResetButtonMAK";


const SubmitResetButtonsMAK = props => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <SubmitButtonMAK label={props.labelForSubmit} disabled={props.disabled}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <ResetButtonMAK label={props.labelForReset} disabled={props.disabled}/>
            </Grid>
        </Grid>
    );
};

SubmitResetButtonsMAK.propTypes = {
    labelForSubmit: PropTypes.string.isRequired,
    labelForReset: PropTypes.string.isRequired,
};

SubmitResetButtonsMAK.defaultProps = {
    disabled: false
};

export default SubmitResetButtonsMAK;
