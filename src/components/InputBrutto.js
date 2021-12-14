import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const InputBrutto = (props) => {
  const { label, priceBruttoEUR, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor="priceBruttoEUR">{label}</label>
      <Field id={priceBruttoEUR} name={priceBruttoEUR} {...rest} />
      <ErrorMessage name={priceBruttoEUR} component={TextError} />
    </div>
  );
};

export default InputBrutto;
