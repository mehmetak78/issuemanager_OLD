import React, {Fragment} from 'react';
import "../../App.css"
import SpeedDialMAK from "../components/SpeedDialMAK";
import {Card, makeStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {setCRUDActionNone, setPaths} from "../../redux/actions/dataActions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
}));

const Home = (props) => {
    const classes = useStyles();
    const formName = "Tasks";

    return (
        <Fragment>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h1">
                        {formName}
                    </Typography>
                    <SpeedDialMAK/>
                </CardContent>

            </Card>

        </Fragment>
    );
};

function mapDispatchToProps() {
    return {
        setPaths,
        setCRUDActionNone
    }
}

export default connect(null, mapDispatchToProps())(Home);
