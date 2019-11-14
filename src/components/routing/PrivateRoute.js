import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {setStatusMessage} from "../../redux/actions/layoutActions";
import {connect} from "react-redux";



const PrivateRoute = ({ component: Component, auth, setStatusMessage,  ...rest }) => {

    const { isAuthenticated } = auth;

    if (!isAuthenticated) {
        setStatusMessage("Not logged in... Redirecting to login")
    }

    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated  ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
const mapStateToProps = state => (
    {
        auth: state.auth
    }
);

function mapDispatchToProps() {
    return {
        setStatusMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(PrivateRoute);
