import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

import { headCells } from "constant";

export default function TableInfo() {
  const user = useSelector((state) => state.info.user);
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width  :"100%"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map((item) => (
              <TableCell align="center" key={item.id}>
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {user?.map((row , index) => (
            <TableRow key={index}>
              <TableCell align="center" component="th">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">
                {row.skills?.map((item) => (
                  <p>{item}</p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
