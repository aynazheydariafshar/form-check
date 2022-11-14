import { TextField } from "@mui/material";
import { useField } from "formik";

const MyInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={!!meta.touched && !!meta.error}
      inputProps={{
        ...props.inputProps,
      }}
      InputProps={{
        ...props.InputProps,
      }}
      {...field}
      {...props}
    />
  );
};

export default MyInput;
