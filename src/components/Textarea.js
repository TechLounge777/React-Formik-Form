import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Textarea = (props) => {
  const { label, description, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={description}>{label}</label>
      <Field as="textarea" id={description} name={description} {...rest} />
      <ErrorMessage name={description} component={TextError} />
    </div>
  );
};

export default Textarea;
