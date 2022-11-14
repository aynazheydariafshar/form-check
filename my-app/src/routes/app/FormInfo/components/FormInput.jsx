import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";

import MyInput from "utils/components/FormikElements/MyInput";
import { elementsInfo, options } from "constant";
import MyMultiSelect from "utils/components/FormikElements/MyMultiSelect";

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
        skills: [],
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="flex flex-col my-5 justify-center items-center">
        {elementsInfo.map((item) => (
          <MyInput
            type={item.type}
            style={{ width: "50%", margin: "10px 0" }}
            name={item.name}
            label={item.label}
            icon={<PersonPinIcon />}
          />
        ))}
        <MyMultiSelect label="Skills" name="skills" options={options} />
        <Button
          type="submit"
          className="bg-gradient-to-r to-orange-500 from-blue-300 my-5"
          variant="contained"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default FormInput;
