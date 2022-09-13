import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import FormMAK, {LOGIN_BUTTON} from "../components/FormMAK";
import TextFieldMAK from "../components/TextFieldMAK";
import {
    loginUser
} from "../../redux/actions/authActions";
import {
    setStatusMessage
} from "../../redux/actions/layoutActions";
import {
    setPaths,
    clearForm
} from "../../redux/actions/dataActions";

import {validateField, validateForm} from "../../utils/validationUtil";
import PropTypes from "prop-types";

const LoginForm = (props) => {

    const formPath = "/login";
    const upFormPath = null;
    const dataPath = "/users";
    const formName = "Login";

    const [errors, setErrors] = useState(null);

    const [user, setUser] = useState({
                                         userName: "",
                                         password: "",
                                     });

    const {userName, password} = user;

    const {loading} = props.layout;

    const fields = {
        userName: {
            name: "userName",
            label: "User Name",
            value: userName,
            type: "email",
            hidden: false,
            disabled: false,
            autoComplete: "userName",
            error: null,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3},
            validation: {
                emailCheck: true,
                emptyCheck: true,
                minLength: 3,
                maxLength: 30
            }
        },
        password: {
            name: "password",
            label: "Password",
            value: password,
            type: "password",
            hidden: false,
            disabled: false,
            autoComplete: "password",
            error: null,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3},
            validation: {
                emptyCheck: true,
                minLength: 3,
                maxLength: 30
            }
        },
    };

    const validations = {};
    Object.keys(fields).forEach((key) => {
        validations[key] = {
            name: fields[key].name,
            label: fields[key].label,
            ...fields[key].validation
        };
    });

    useEffect(() => {
        props.setPaths(formPath, upFormPath, dataPath);
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        return () => {
            props.clearForm();
        }
        // eslint-disable-next-line
    }, []);

    const handleChange = (e) => {

        const field = fields[e.target.name];
       const error = validateField(validations[field.name], e.target.value);

        if (error) {
            setErrors({...errors, ...error});
        } else if (errors && errors[field.name]) {
            setErrors({...errors, [field.name]: null});
        }
        setUser({...user, [field.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validateForm(validations, user);
        if (errs) {
            setErrors(errs);
            console.log("Form has errors");
        }
        else {
            console.log("handleSubmit");
            props.loginUser(dataPath, user);
            props.history.push("/");
        }
    };

    return (
        <FormMAK
            handleSubmit={handleSubmit}
            type={LOGIN_BUTTON}
            label={formName}
            loading={loading}>
            <TextFieldMAK
                errorMessage={errors ? errors[fields.userName.name] : null}
                field={fields.userName}
                onChange={handleChange}
            />
            <TextFieldMAK
                errorMessage={errors ? errors[fields.password.name] : null}
                field={fields.password}
                onChange={handleChange}
            />
        </FormMAK>

    );
};

LoginForm.propTypes = {
    layout: PropTypes.object.isRequired,
    clearForm: PropTypes.func.isRequired,

};

const mapStateToProps = state => (
    {
        auth: state.auth,
        layout: state.layout
    }
);

function mapDispatchToProps() {
    return {
        loginUser,
        setStatusMessage,
        setPaths,
        clearForm
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(LoginForm);
