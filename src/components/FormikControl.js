import React from "react";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import Input from "./Input";
import InputBrutto from "./InputBrutto";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "textarea":
      return <Textarea {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "input":
      return <Input {...rest} />;
    case "input2":
      return <InputBrutto {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
