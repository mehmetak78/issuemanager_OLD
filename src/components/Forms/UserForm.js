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
    CRUD_NONE,
    CRUD_SELECTED,
} from "../../redux/actions/actionTypes";


const UserForm = (props) => {

    const formPath = "/user";
    const dataPath = "/users";
    const formName = "User";

    const [loading] = useState(false);

    useEffect(() => {
        //mount
        const {setPaths} = props;
        setPaths(formPath, dataPath);
        // eslint-disable-next-line
    },[]);
    useEffect(() => {
        //unMount
        return () => {
            props.clearForm();
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        //state Change
        const {setFormData, setInitialFormData, setCRUDActionInserting} = props;
        const {crudState} = props.data;

        if (crudState === CRUD_NONE) {
            setFormData({
                            userName: "",
                            firstName: "",
                            lastName: "",
                        });
            setInitialFormData({
                                   userName: "",
                                   firstName: "",
                                   lastName: "",
                               });

            setCRUDActionInserting();
        }
        if (crudState === CRUD_SELECTED) {
            setInitialFormData(props.data.formData);
        }
        // eslint-disable-next-line
    }, [props.data.crudState]);





    const {formData} = props.data;
    //  const {userName} = props.data.formData;

    const fields = formData ? {
            userName: {
                name: "userName",
                label: "User Name",
                value: formData.userName,

                //value: userName ? userName : "",

                type: "email",
                hidden: false,
                disabled: false,
                size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
            },
            firstName: {
                name: "firstName",
                label: "First Name",
                value: formData.firstName,
                type: "text",
                hidden: false,
                disabled: false,
                size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
            },
            lastName: {
                name: "lastName",
                label: "Last Name",
                value: formData.lastName,
                type: "text",
                hidden: false,
                disabled: false,
                size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
            },
        }
        : null;

    const handleChange = (e) => {
        props.setCRUDActionEditing();
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
