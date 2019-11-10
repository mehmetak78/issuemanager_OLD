import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import FormMAK, {NO_BUTTON} from "../components/FormMAK";
import TextFieldMAK from "../components/TextFieldMAK";
import {
    setPaths,
    setFormData,
    setInitialFormData,
    setCRUDActionInserting,
    setCRUDActionSelected,
    setCRUDActionEditing,
    clearForm,
} from "../../redux/actions/dataActions";
import {
    CRUD_EDITING,
    CRUD_NONE,
    CRUD_SELECTED,
} from "../../redux/actions/actionTypes";

const UserForm = (props) => {

    const formPath = "/user";
    const dataPath = "/users";
    const formName = "User";

    const [loading] = useState(false);

    const {formData} = props.data;

    const fields = {
        userName: {
            name: "userName",
            label: "User Name",
            value: formData ? formData.userName : null,
            type: "email",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
        firstName: {
            name: "firstName",
            label: "First Name",
            value: formData ? formData.firstName : null,
            type: "text",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
        lastName: {
            name: "lastName",
            label: "Last Name",
            value: formData ? formData.lastName : null,
            type: "text",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
    };

    useEffect(() => {
        const {setPaths} = props;
        setPaths(formPath, dataPath);
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        return () => {
            props.clearForm();
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        const {setFormData, setInitialFormData, setCRUDActionInserting} = props;
        const {crudState} = props.data;

        if (crudState === CRUD_NONE) {
            Object.keys(fields).forEach((key) => (
                fields[key] = ""
            ));
            setFormData(fields);
            setInitialFormData(fields);
            setCRUDActionInserting();
        }
        if (crudState === CRUD_SELECTED) {
            setInitialFormData(props.data.formData);
        }
        // eslint-disable-next-line
    }, [props.data.crudState]);


    const handleChange = (e) => {
        if (props.data.crudState !== CRUD_EDITING) {
            props.setCRUDActionEditing();
        }
        props.setFormData({[e.target.name]: e.target.value});
    };

    return (
        formData ?
            <FormMAK
                type={NO_BUTTON}
                label={formName}
                loading={loading}>
                <TextFieldMAK
                    field={fields.userName}
                    onChange={handleChange}
                />
                <TextFieldMAK
                    field={fields.firstName}
                    onChange={handleChange}
                />
                <TextFieldMAK
                    field={fields.lastName}
                    onChange={handleChange}
                />
            </FormMAK>
            : null
    );
};

const mapStateToProps = state => (
    {
        data: state.data
    }
);

function mapDispatchToProps() {
    return {
        setPaths,
        setFormData,
        setInitialFormData,
        setCRUDActionInserting,
        setCRUDActionSelected,
        setCRUDActionEditing,
        clearForm
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(UserForm);
