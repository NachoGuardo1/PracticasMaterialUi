import React, { useState } from "react";
import { Stack, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="primary"
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<SaveIcon />}
              iconPosition="end"
            />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel 4</TabPanel>
        <TabPanel value="5">Panel 5</TabPanel>
      </TabContext>
    </Stack>
  );
};
