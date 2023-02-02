import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


const TimeLine = ({timelines=[]}) => {
  return (
    <div>
        <Timeline align="alternate">
            {timelines.map((item,index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        3/2/23
                        </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="h1">Title</Typography>
                            <Typography variant="h6" component="h1">Title</Typography>

                        </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>

    </div>
  );
}

export default TimeLine