import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { useField } from "formik";

const MyInput = ({ icon, ...props }) => {
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
        endAdornment: (
          <InputAdornment
            style={{ color: meta.touched && meta.error ? "red" : "" }}
            position="end"
          >
            {icon}
          </InputAdornment>
        ),
      }}
      {...field}
      {...props}
    />
  );
};

export default MyInput;
