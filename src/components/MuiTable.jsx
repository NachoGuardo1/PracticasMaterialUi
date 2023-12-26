import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export const MuiTable = () => {
  const tableData = [
    {
      id: 1,
      first_name: "Brandy",
      last_name: "Blind",
      email: "bblind0@etsy.com",
      gender: "Female",
      ip_address: "43.225.157.143",
    },
    {
      id: 2,
      first_name: "Catriona",
      last_name: "Conachie",
      email: "cconachie1@nifty.com",
      gender: "Female",
      ip_address: "4.246.177.118",
    },
    {
      id: 3,
      first_name: "Chic",
      last_name: "Crees",
      email: "ccrees2@forbes.com",
      gender: "Male",
      ip_address: "39.193.117.93",
    },
    {
      id: 4,
      first_name: "Scarface",
      last_name: "Colicot",
      email: "scolicot3@linkedin.com",
      gender: "Male",
      ip_address: "243.103.136.0",
    },
    {
      id: 5,
      first_name: "Yard",
      last_name: "Balaisot",
      email: "ybalaisot4@alexa.com",
      gender: "Genderqueer",
      ip_address: "72.22.60.162",
    },
    {
      id: 6,
      first_name: "Laurene",
      last_name: "Tortice",
      email: "ltortice5@economist.com",
      gender: "Female",
      ip_address: "163.238.218.63",
    },
    {
      id: 7,
      first_name: "Rosette",
      last_name: "Piel",
      email: "rpiel6@google.ca",
      gender: "Bigender",
      ip_address: "51.223.24.206",
    },
    {
      id: 8,
      first_name: "Katina",
      last_name: "Smitheram",
      email: "ksmitheram7@gizmodo.com",
      gender: "Female",
      ip_address: "69.20.228.115",
    },
    {
      id: 9,
      first_name: "Brittani",
      last_name: "Langlais",
      email: "blanglais8@answers.com",
      gender: "Female",
      ip_address: "27.19.104.49",
    },
    {
      id: 10,
      first_name: "Holly",
      last_name: "Brumpton",
      email: "hbrumpton9@goo.ne.jp",
      gender: "Female",
      ip_address: "182.144.197.159",
    },
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "300px",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
