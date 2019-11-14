import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

export const validateForm = (validations, formData) => {

    let errors = null;
    Object.keys(validations).forEach(fieldName => {
        const error = validateField(validations[fieldName],formData[fieldName]);
        if (error) {
            errors = {...errors, ...error};
        }

    });
    return errors;
};

export const validateField = (fieldValidation, fieldValue) => {
    if (fieldValidation.emptyCheck && !fieldValue) {
        return {[fieldValidation.name]: fieldValidation.label + " cannot be empty"};
    } else if (fieldValidation.minLength && fieldValue && fieldValue.length < fieldValidation.minLength) {
        return {[fieldValidation.name]: "The lenth of " + fieldValidation.label + " must be more than " + fieldValidation.minLength};
    } else if (fieldValidation.maxLength && fieldValue && fieldValue.length > fieldValidation.maxLength) {
        return {[fieldValidation.name]: "The lenth of " + fieldValidation.label + " must be less than " + fieldValidation.maxLength};
    } else if (fieldValidation.emailCheck && fieldValue && !isEmail(fieldValue)) {
        return {[fieldValidation.name]: fieldValidation.label + " must be a valid email address"};
    } else if (fieldValidation.urlCheck && fieldValue && !isURL(fieldValue)) {
        return {[fieldValidation.name]: fieldValidation.label + " must be a valid email address"};
    }
};