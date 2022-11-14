import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import MyChart from "utils/components/MyChart";

const ChartInfo = () => {
  const user = useSelector((state) => state.info.user);
  const labels = user?.map((item) => item.age);
  const skill = user?.map((item) => item.skills.map((item) => item));
  const counts = [];
  const countsSkill = [];
  labels.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  skill.forEach((x) => {
    countsSkill[x] = (countsSkill[x] || 0) + 1;
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
  return (
    <Box
      style={{ height: "100vh" }}
      className="flex-col flex bg-gradient-to-r from-orange-500 to-blue-300 justify-center items-center"
    >
      {user.length > 0 ? (
        <>
          <Box
            sx={{ boxShadow: 3 }}
            className="w-[500px] h-auto m-5 rounded-lg bg-white"
          >
            <MyChart data={dataAge} />
          </Box>
          <Box
            sx={{ boxShadow: 3 }}
            className="w-[500px] h-auto m-5 rounded-lg bg-white"
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
