import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30pm
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City b</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30pm
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>City c</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
