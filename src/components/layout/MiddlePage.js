import React from 'react';
import {Switch, Route} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import UserForm from "../Forms/UserForm";
import Admin from "../pages/Admin";
import Settings from "../pages/Settings";
import UsersForm from "../Forms/UsersForm";


const MiddlePage = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/users" component={UsersForm}/>
            <Route exact path="/user" component={UserForm}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

MiddlePage.propTypes = {};

export default MiddlePage;
