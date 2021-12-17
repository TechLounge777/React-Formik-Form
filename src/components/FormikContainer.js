import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const radioOptions = [
    { key: "YES", value: "YES" },
    { key: "NO", value: "NO" },
  ];

  const dropdownOptions = [
    { key: "Choose VAT", value: "" },
    { key: "19%", value: "19%" },
    { key: "21%", value: "21%" },
    { key: "23%", value: "23%" },
    { key: "25%", value: "25%" },
  ];

  const initialValues = {
    description: "",
    radioOption: "",
    selectOption: "",
    priceNettoEUR: "",
    priceBruttoEUR: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string()
      .required("Text is required")
      .min(1)
      .max(250, "Text must not exceed 250 characters"),
    radioOption: Yup.string().required("Text is required"),
    selectOption: Yup.string().required("Text is required"),
    priceNettoEUR: Yup.number()
      .transform((o, v) => parseFloat(v.replace(/,/g, "")))
      .typeError("Please, input number")
      .required("Please, input number")
      .positive("Price Netto EUR must be a positive number"),
    priceBruttoEUR: Yup.number().required("Text is required"),
  });
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="radio"
            label="Send Information"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="select"
            label="Choose VAT"
            name="selectOption"
            options={dropdownOptions}
          />

          {formik.values.selectOption && (
            <FormikControl
              control="input"
              type="text"
              label="Price Netto EUR"
              priceNettoEUR="priceNettoEUR"
            />
          )}

          <FormikControl
            control="input"
            type="text"
            label="Price Brutto EUR"
            priceNettoEUR="priceBruttoEUR"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
