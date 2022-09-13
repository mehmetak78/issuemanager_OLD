import React, {useEffect} from 'react';
import {connect} from "react-redux";
import FormMAK, {NO_BUTTON} from "../components/FormMAK";
import TextFieldMAK from "../components/TextFieldMAK";
import {
    setPaths,
    setValidations,
    clearValidations,
    setFormData,
    setInitialFormData,
    setCRUDActionInserting,
    setCRUDActionSelected,
    setCRUDActionInsertEditing,
    setCRUDActionUpdateEditing,
    clearForm,
    addError,
    clearErrors, setCRUDActionNone
} from "../../redux/actions/dataActions";
import {
    CRUD_INSERT_EDITING,
    CRUD_NONE,
    CRUD_SELECTED,
    CRUD_UPDATE_EDITING,
} from "../../redux/actions/actionTypes";
import {validateField} from "../../utils/validationUtil";
import PropTypes from "prop-types";



const WorkflowType = (props) => {

    const formPath = "/workflowtype";
    const upFormPath = "/workflowtypes";
    const dataPath = "/workflowtypes";
    const formNameAdd = "Add Workflow Type";
    const formNameEdit = "Edit Workflow Type";

    const {formData, formErrors} = props.data;
    const {loading} = props.layout;

    const fields = {
        workflowTypeName: {
            name: "workflowTypeName",
            label: "Workflow Type Name",
            value: formData ? formData.categoryName : null,
            type: "text",
            hidden: false,
            disabled: false,
            autoComplete: "workflowTypeName",
            error: null,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3},
            validation: {
                emailCheck: false,
                emptyCheck: true,
                minLength: 3,
                maxLength: 90
            }
        },
        workflowTypeDescription: {
            name: "workflowTypeDescription",
            label: "Workflow Type Description",
            value: formData ? formData.categoryDescription : null,
            type: "text",
            hidden: false,
            disabled: false,
            autoComplete: "workflowTypeDescription",
            error: null,
            size: {xs: 12, sm: 12, md: 6, lg: 4, xl: 3},
            validation: {
                emptyCheck: true,
                minLength: 3,
                maxLength: 90
            }
        }
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
        props.setValidations(validations);
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        return () => {
            props.clearForm();
            props.clearValidations();
            props.clearErrors();
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        const {setFormData, setInitialFormData, setCRUDActionNone} = props;
        const {crudState} = props.data;

        if (crudState === CRUD_NONE) {
            Object.keys(fields).forEach((key) => (
                fields[key] = ""
            ));
            fields["id"] = null;
            setFormData(fields);
            setInitialFormData(fields);
            setCRUDActionNone();
        }
        if (crudState === CRUD_SELECTED) {
            setInitialFormData(props.data.formData);
        }
        // eslint-disable-next-line
    }, [props.data.crudState]);

    const handleChange = (e) => {
        if (props.data.crudState !== CRUD_INSERT_EDITING && props.data.crudState !== CRUD_UPDATE_EDITING) {
            if (formData && formData.id) {
                props.setCRUDActionUpdateEditing();
            } else {
                props.setCRUDActionInsertEditing();
            }
        }

        const field = fields[e.target.name];
        const error = validateField(validations[field.name], e.target.value);
        if (error) {
            props.addError(error);
        } else if (props.data.formErrors && props.data.formErrors[field.name]) {
            props.addError({[field.name]: null});
        }
        props.setFormData({[field.name]: e.target.value});
    };

    return (
        formData ?
            <FormMAK
                type={NO_BUTTON}
                label={props.data.crudState===CRUD_SELECTED || props.data.crudState===CRUD_UPDATE_EDITING ? formNameEdit : formNameAdd}
                loading={loading}>
                <TextFieldMAK
                    errorMessage={formErrors ? formErrors[fields.workflowTypeName.name] : null}
                    field={fields.workflowTypeName}
                    onChange={handleChange}
                />
                <TextFieldMAK
                    errorMessage={formErrors ? formErrors[fields.workflowTypeDescription.name] : null}
                    field={fields.workflowTypeDescription}
                    onChange={handleChange}/>
            </FormMAK>
            : null
    );
};

WorkflowType.propTypes = {
    layout: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    setValidations: PropTypes.func.isRequired,
    clearValidations: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    setInitialFormData: PropTypes.func.isRequired,
    setCRUDActionNone: PropTypes.func.isRequired,
    setCRUDActionInserting: PropTypes.func.isRequired,
    setCRUDActionSelected: PropTypes.func.isRequired,
    setCRUDActionInsertEditing: PropTypes.func.isRequired,
    setCRUDActionUpdateEditing: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    addError: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
    {
        layout: state.layout,
        data: state.data
    }
);

function mapDispatchToProps() {
    return {
        setPaths,
        setValidations,
        clearValidations,
        setFormData,
        setInitialFormData,
        setCRUDActionNone,
        setCRUDActionInserting,
        setCRUDActionSelected,
        setCRUDActionInsertEditing,
        setCRUDActionUpdateEditing,
        clearForm,
        addError,
        clearErrors
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(WorkflowType);
