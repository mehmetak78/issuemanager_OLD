import React from 'react';
import "../../App.css"
import {Card, Grid, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import UsersIcon from '@material-ui/icons/SupervisorAccount';
import ListItemText from "@material-ui/core/ListItemText";
import {
    setCRUDActionNone,
    setPaths
} from "../../redux/actions/dataActions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%"
    },
    navlink: {
        textDecoration: "none",
        color: theme.palette.text.primary,
        textAlign: "center",
        alignItems: "center",
        marginBottom: "auto",
        marginTop: "auto"
    },
}));

const Admin = (props) => {
    const classes = useStyles();

    const formName = "Administator";

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h1">
                    {formName}
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                        <NavLink to="/users" className={classes.navlink}>
                            <ListItem button key={"UsersPage"} name={"UsersPage"}>
                                <ListItemIcon><UsersIcon color="primary"/></ListItemIcon>
                                <ListItemText primary="Users"/>
                            </ListItem>
                        </NavLink>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

function mapDispatchToProps() {
    return {
        setPaths,
        setCRUDActionNone
    }
}

export default connect(null, mapDispatchToProps())(Admin);
