import React from 'react';
import {Grid} from "@material-ui/core";

const GridItemMAK = props => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            {props.children}
        </Grid>
    );
};

export default GridItemMAK;
