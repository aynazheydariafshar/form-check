import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      style={{ height: "100vh" }}
      className="flex-col flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center"
    >
      <Box
        sx={{ boxShadow: 3 }}
        className="w-[200px] h-auto p-5 m-5 rounded-lg bg-white"
      >
        <Typography variant="h5" className="font-bold text-center">
          Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
