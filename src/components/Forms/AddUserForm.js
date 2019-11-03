import React, {useState} from 'react';

import TextFieldMAK from "../components/TextFieldMAK";

import FormMAK, {ADD_RESET} from "../components/FormMAK";


const AddUserForm = () => {
    const [user, setUser] = useState({
                                         userName: "",
                                         firstName: "",
                                         lastName: "",
                                     });


    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const handleReset = (e) => {
        e.preventDefault();
        console.log("Reset Form")
        setUser({userName: "", firstName: "", lastName: ""});
    };

    return (
        <FormMAK type = {ADD_RESET}  label="Add User" handleSubmit={handleSubmit} handleReset={handleReset} >
            <TextFieldMAK
                label="User Name"
                name="userName"
                type="email"
                value={user.userName}
                onChange={handleChange}
            />
            <TextFieldMAK
                label="First Name"
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
            />
            <TextFieldMAK
                label="Last Name"
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
            />
        </FormMAK>
    );
};

export default AddUserForm;
