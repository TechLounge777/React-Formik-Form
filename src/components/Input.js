import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { label, priceNettoEUR, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor="priceNettoEUR">{label}</label>
      <Field id={priceNettoEUR} name={priceNettoEUR} {...rest} />
      <ErrorMessage name={priceNettoEUR} component={TextError} />
    </div>
  );
};

export default Input;
