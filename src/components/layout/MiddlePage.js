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
import CategoriesForm from "../Forms/CategoriesForm";
import CategoryForm from "../Forms/CategoryForm";
import WorkflowTypesForm from "../Forms/WorkflowTypesForm";
import WorkflowTypeForm from "../Forms/WorkflowTypeForm";


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
            <PrivateRoute exact path="/categories" component={CategoriesForm}/>
            <PrivateRoute exact path="/category" component={CategoryForm}/>
            <PrivateRoute exact path="/workflowtypes" component={WorkflowTypesForm}/>
            <PrivateRoute exact path="/workflowtype" component={WorkflowTypeForm}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

MiddlePage.propTypes = {};

export default MiddlePage;
