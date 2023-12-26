import React, { useState } from "react";
import { Stack } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

export const MuiDateAndTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [value, setValue] = useState([null, null]);
  console.log(value);
  return (
    <Stack spacing={4} sx={{ width: "300px" }}>
      <DatePicker
        label="date picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="time picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="date time picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />

      <DateRangePicker
        variant="outlined"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Stack>
  );
};
