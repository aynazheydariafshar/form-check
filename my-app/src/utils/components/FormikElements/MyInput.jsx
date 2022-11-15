import { InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const MyInput = (props) => {
  const { errorMessage ,onChange,id, ...inputProps } = props;

  return (
    <>
      <TextField
        {...inputProps}
        required
        fullWidth
        style={{ width: "75%", margin: "10px 0" }}
        onChange={onChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">{<PersonPinIcon />}</InputAdornment>,
        }}
      />
    </>
  );
};

export default MyInput;
