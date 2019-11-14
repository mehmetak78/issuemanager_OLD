import React from 'react';
import {Switch, Route} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import UserForm from "../Forms/UserForm";
import Admin from "../pages/Admin";
import Settings from "../pages/Settings";
import UsersForm from "../Forms/UsersForm";
import LoginForm from "../Forms/LoginForm";
import PrivateRoute from "../routing/PrivateRoute";


const MiddlePage = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={LoginForm}/>
            <Route exact path="/settings" component={Settings}/>
            <PrivateRoute exact path="/home" component={Home}/>
            <PrivateRoute exact path="/admin" component={Admin}/>
            <PrivateRoute exact path="/users" component={UsersForm}/>
            <PrivateRoute exact path="/user" component={UserForm}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

MiddlePage.propTypes = {};

export default MiddlePage;
