import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import FormInput from "./components/FormInput";
import TableInfo from "./components/TableInfo";

const FormInfo = () => {
  const user = useSelector((state) => state.info.user);

  return (
    <Box
      className="flex-col overflow-y-auto min-h-screen h-full flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center"
    >
      <Box
        sx={{ boxShadow: 3 }}
        className="w-[35%] h-auto m-5 rounded-lg bg-white"
      >
        <FormInput />
      </Box>
      <Box
        sx={{ boxShadow: 3 }}
        className="w-[70%] overflow-x-auto h-auto m-5 rounded-lg bg-white"
      >
        {user.length > 0 && <TableInfo />}
      </Box>
    </Box>
  );
};

export default FormInfo;
