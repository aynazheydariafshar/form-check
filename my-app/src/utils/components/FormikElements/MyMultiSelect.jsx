import { FormControl } from "@mui/material";
import { useFormikContext } from "formik";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Checkbox } from "@mui/material";
import { ListItemText } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Typography } from "@mui/material";
import { OutlinedInput } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const MyMultiSelect = ({ label, name, options }) => {
  const { values, setFieldValue } = useFormikContext();
  const isAllSelected =
    options?.length > 0 && values[name].length === options?.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setFieldValue(
        name,
        values[name].length === options.length
          ? []
          : options.map((item) => item)
      );
      return;
    }
    let temp = value;
    if (typeof value === "string") {
      temp = value.split(",");
    }
    setFieldValue(name, temp);
  };

  return (
    <FormControl sx={{ width: "50%", margin: "10px 0" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={values[name]}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        input={<OutlinedInput label={label} />}
      >
        <MenuItem className="w-full flex justify-between" value="all">
          <Checkbox
            checked={isAllSelected}
            indeterminate={
              values[name].length > 0 && values[name].length < options?.length
            }
          />
          <ListItemText primary="all" />
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            style={{ whiteSpace: "normal" }}
            className="w-full flex justify-between "
            value={option}
          >
            <Checkbox
              checked={values[name]?.findIndex((el) => el === option) > -1}
            />
            <Typography>{option}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MyMultiSelect;
