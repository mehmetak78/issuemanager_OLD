import React, {Fragment} from 'react';
import "../../App.css"
import {Card, makeStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Fragment >
            <Card className={classes.card}>
                <CardContent >
                    <Typography variant="h1"  >
                        Settings
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    );
};

export default Home;
