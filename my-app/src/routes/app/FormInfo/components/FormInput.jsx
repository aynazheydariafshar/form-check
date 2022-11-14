import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonPinIcon from '@mui/icons-material/PersonPin';

import MyInput from "utils/components/FormikElements/MyInput";
import { Button } from "@mui/material";

const FormInput = () => {
  const checkField = Yup.string().required("This field is required").trim();
  const elementsInfo = [
    {
        type : "text",
        label : "First Name",
        name : "firstName",
    },
    {
        type : "text",
        label : "Last Name",
        name : "lastName",
    },
    {
        type : "number",
        label : "Age",
        name : "age",
    },
    {
        type : "text",
        label : "Skills",
        name : "skills",
    }
]
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
      <Form className="flex flex-col my-5 justify-center items-center">
        {elementsInfo.map((item) => (
          <MyInput
            type={item.type}
            style={{ width: "50%" , margin : "10px 0" }}
            name={item.name}
            label={item.label}
            icon={<PersonPinIcon />}
          />
        ))}
        <Button type="submit" className="bg-gradient-to-r from-orange-500 to-blue-300 my-5" variant="contained">Submit</Button>
      </Form>
    </Formik>
  );
};

export default FormInput;
