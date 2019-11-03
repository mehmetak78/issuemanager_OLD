import React from 'react';
import { Switch, Route } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import AddUserForm from "../Forms/AddUserForm";


const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,

        height: '100vh',

        backgroundColor: theme.palette.background.default,
    },
}));

const MiddlePage = props => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/addUser" component={AddUserForm}/>
                <Route component={PageNotFound}/>
            </Switch>
        </main>
    );
};

MiddlePage.propTypes = {

};

export default MiddlePage;
