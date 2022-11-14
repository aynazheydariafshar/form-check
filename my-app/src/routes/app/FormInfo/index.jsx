import { Box } from "@mui/material";
import FormInput from "./components/FormInput";

const FormInfo = () => {
  return (
    <Box className="flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center h-[100vh]">
      <Box sx={{ boxShadow: 3 }} className="w-[500px] h-auto m-5 rounded-lg bg-white">
        <FormInput />
      </Box>
    </Box>
  );
};

export default FormInfo;
