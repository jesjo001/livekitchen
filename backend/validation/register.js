const Validator = require('validator')
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.address1 = !isEmpty(data.address1) ? data.address1 : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.country = !isEmpty(data.country) ? data.country : "";
    data.dob = !isEmpty(data.dob) ? data.dob : "";

    //useName Checks
    if (Validator.isEmpty(data.username)) {
        error.name = "userName Field is required";
    }

    //FirstName Checks
    if (Validator.isEmpty(data.firstName)) {
        error.name = "firstName Field is required";
    }

    //lastName Checks
    if (Validator.isEmpty(data.lastName)) {
        error.name = "lastName Field is required";
    }

    //address Checks
    if (Validator.isEmpty(data.address1)) {
        error.name = "Address Field is required";
    }

    //city Checks
    if (Validator.isEmpty(data.city)) {
        error.name = "City Field is required";
    }

    //country Checks
    if (Validator.isEmpty(data.country)) {
        error.name = "Country Field is required";
    }

    //Dob Checks
    if (Validator.isEmpty(data.dob)) {
        error.name = "dob Field is required";
    }


    //Email Checks
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};