import React from 'react';
import {Switch, Route} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import AddUserForm from "../Forms/AddUserForm";
import Admin from "../pages/Admin";
import Settings from "../pages/Settings";


const MiddlePage = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/addUser" component={AddUserForm}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

MiddlePage.propTypes = {};

export default MiddlePage;
