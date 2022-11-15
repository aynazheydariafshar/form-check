import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { IconButton } from "@mui/material";
import { useState } from "react";

import MyInput from "utils/components/FormikElements/MyInput";
import { CHART, elementsInfo, options } from "constant";
import MyMultiSelect from "utils/components/FormikElements/MyMultiSelect";
import { setUser } from "redux/infoSlice";

const FormInput = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.info.user);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    skills: [],
  });

  //handle submit updates
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser([...user, values]));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col my-5 justify-center items-center"
    >
      {elementsInfo.map((item) => (
        <MyInput
          key={item.id}
          {...item}
          value={values[item.name]}
          onChange={onChange}
        />
      ))}
      <MyMultiSelect
        label="Skills"
        name="skills"
        options={options}
        setValues={setValues}
        values={values}
      />
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
    </form>
  );
};

export default FormInput;
