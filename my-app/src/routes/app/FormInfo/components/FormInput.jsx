import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "utils/components/FormikElements/MyInput";

const FormInput = () => {
    const checkField = Yup.string().required("This field is required").trim();

  return (
    <Formik
      validationSchema={Yup.object({
        firstName: checkField,
        lastName: checkField,
        age: checkField,
        skills: checkField,
      })}
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        skills: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="flex flex-col my-3 justify-center items-center">
        <MyInput className="p-5" style={{width : "50%"}} name="firstName" label="First Name"/>
      </Form>
    </Formik>
  );
};

export default FormInput;
