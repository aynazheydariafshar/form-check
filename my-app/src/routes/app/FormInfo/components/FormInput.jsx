import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import MyInput from "utils/components/FormikElements/MyInput";
import { CHART, elementsInfo, options } from "constant";
import MyMultiSelect from "utils/components/FormikElements/MyMultiSelect";
import { setUser } from "redux/infoSlice";
import { IconButton } from "@mui/material";

const FormInput = () => {
  const checkField = Yup.string().required("This field is required").trim();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.info.user);
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={Yup.object({
        firstName: checkField,
        lastName: checkField,
        age: checkField,
      })}
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        skills: [options[0]],
      }}
      onSubmit={(values, actions) => {
        dispatch(setUser([...user, values]));
        // console.log(user)
      }}
    >
      <Form className="flex flex-col my-5 justify-center items-center">
        {elementsInfo.map((item) => (
          <MyInput
            type={item.type}
            style={{ width: "75%", margin: "10px 0" }}
            name={item.name}
            label={item.label}
            icon={<PersonPinIcon />}
          />
        ))}
        <MyMultiSelect label="Skills" name="skills" options={options} />
        <Button
          type="submit"
          className="bg-gradient-to-r to-orange-500 from-blue-300"
          sx={{ margin: "10px 0" }}
          variant="contained"
        >
          Submit
        </Button>
        <IconButton onClick={() => navigate(`/${CHART}`)}>
          <EqualizerIcon className="text-gray-700 hover:text-orange-500 hover:cursor-pointer" />
        </IconButton>
      </Form>
    </Formik>
  );
};

export default FormInput;
