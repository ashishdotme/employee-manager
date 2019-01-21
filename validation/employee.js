const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEmployeeInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
