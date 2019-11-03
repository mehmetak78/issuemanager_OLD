import React, {useState} from 'react';

import FormMAK, {ADD_RESET} from "../components/FormMAK";

import TextFieldMAK from "../components/TextFieldMAK";


const AddUserForm = () => {
    const [user, setUser] = useState({
                                         userName: "",
                                         firstName: "",
                                         lastName: "",
                                     });
    const fields = {
        userName: {
            name: "userName",
            label: "User Name",
            value: user.userName,
            type: "email",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
        firstName: {
            name: "firstName",
            label: "First Name",
            value: user.firstName,
            type: "text",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
        lastName: {
            name: "lastName",
            label: "Last Name",
            value: user.lastName,
            type: "text",
            hidden: false,
            disabled: false,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3}
        },
    };

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setUser({userName: "", firstName: "", lastName: ""});
        console.log("Reset Form")
    };

    return (
        <FormMAK type={ADD_RESET} label="Add User" handleSubmit={handleSubmit} handleReset={handleReset}>
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
    );
};

export default AddUserForm;