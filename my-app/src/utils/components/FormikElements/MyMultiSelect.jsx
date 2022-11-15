import { FormControl } from "@mui/material";
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
const MyMultiSelect = ({ label, setValues, values, options }) => {
  const isAllSelected =
    options?.length > 0 && values.skills.length === options?.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setValues({
        ...values,
        skills: values.skills.length === options.length ? [] : options,
      });
      return;
    }
    console.log(values.skills);
    setValues({
      ...values,
      skills: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <FormControl sx={{ width: "75%", margin: "10px 0" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        required
        multiple
        name="skills"
        value={values.skills}
        onChange={handleChange}
        renderValue={(selected) => values.skills.join(", ")}
        MenuProps={MenuProps}
        input={<OutlinedInput label={label} />}
      >
        <MenuItem className="w-full flex justify-between" value="all">
          <Checkbox
            checked={isAllSelected}
            indeterminate={
              values.skills.length > 0 && values.skills.length < options?.length
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
              checked={values.skills?.findIndex((el) => el === option) > -1}
            />
            <Typography>{option}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MyMultiSelect;
