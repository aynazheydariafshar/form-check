import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MyChart from "utils/components/MyChart";
import { MY_APP } from "constant";

const ChartInfo = () => {
  const user = useSelector((state) => state.info.user);
  const labels = user?.map((item) => item.age);
  const skill = user?.map((item) => item.skills.map((item) => item));
  const navigate = useNavigate();
  const counts = [];
  const countsSkill = [];
  labels.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  skill.forEach((x) => {
    x.forEach((item) => {
      countsSkill[item] = (countsSkill[item] || 0) + 1;
    });
  });

  const dataAge = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "age",
        data: Object.values(counts),
        backgroundColor: "blue",
      },
    ],
  };

  const dataSkills = {
    labels: Object.keys(countsSkill),
    datasets: [
      {
        label: "skills",
        data: Object.values(countsSkill),
        backgroundColor: "orange",
      },
    ],
  };
  console.log(Object.keys(countsSkill));
  return (
    <Box className="flex-col overflow-y-auto min-h-screen h-full flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center">
      <Box className="w-full flex px-5">
        <IconButton onClick={() => navigate(`${MY_APP}`)}>
          <HomeRoundedIcon
            fontSize="large"
            className="text-black text-left hover:text-white"
          />
        </IconButton>
      </Box>
      {user.length > 0 ? (
        <>
          <Box
            sx={{ boxShadow: 3 }}
            className="w-[40%] h-auto m-5 rounded-lg bg-white"
          >
            <MyChart data={dataAge} />
          </Box>
          <Box
            sx={{ boxShadow: 3 }}
            className="w-[40%] h-auto m-5 rounded-lg bg-white"
          >
            <MyChart data={dataSkills} />
          </Box>
        </>
      ) : (
        <Box
          sx={{ boxShadow: 3 }}
          className="w-[200px] h-auto p-5 m-5 rounded-lg bg-white"
        >
          <Typography className="text-center font-bold" variant="h5">
            please add info user
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChartInfo;
