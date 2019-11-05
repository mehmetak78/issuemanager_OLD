import React from 'react';
import "../../App.css"
import {Card, Container, Grid, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
        marginTop: "20px",
        flexGrow: 1,
    },
    header: {
        textAlign: "center",
        marginBottom: "40px"
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

const Admin = () => {
    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h1" gutterBottom className={classes.header}>
                        Administrator
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                            <NavLink to="/addUser" className={classes.navlink} >
                                <ListItem button key={"AddUserPage"} name={"AddUserPage"} >
                                    <ListItemIcon><PersonAddIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Add User"/>
                                </ListItem>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                            <NavLink to="/addUser" className={classes.navlink} >
                                <ListItem button key={"AddUserPage"} name={"AddUserPage"} >
                                    <ListItemIcon><PersonAddIcon color="primary"/></ListItemIcon>
                                    <ListItemText primary="Add User"/>
                                </ListItem>
                            </NavLink>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </Container>
    );
};

export default Admin;
