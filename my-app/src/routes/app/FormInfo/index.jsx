import { Box } from "@mui/material";
import FormInput from "./components/FormInput";
import TableInfo from "./components/TableInfo";
import { useSelector } from "react-redux";

const FormInfo = () => {
  const user = useSelector((state) => state.info.user);

  return (
    <Box
      style={{ height: user.length > 3 ? "auto" : "100vh" }}
      className="flex-col flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center"
    >
      <Box
        sx={{ boxShadow: 3 }}
        className="w-[500px] h-auto m-5 rounded-lg bg-white"
      >
        <FormInput />
      </Box>
      <Box
        sx={{ boxShadow: 3 }}
        className="w-[800px] h-auto m-5 rounded-lg bg-white"
      >
        {user.length > 0 && <TableInfo />}
      </Box>
    </Box>
  );
};

export default FormInfo;
