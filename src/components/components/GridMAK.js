import React from 'react';
import {Grid} from "@material-ui/core";

const GridMAK = props => {
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
        >
            {props.children}
        </Grid>
    );
};

export default GridMAK;
