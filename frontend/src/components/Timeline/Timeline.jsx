import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
 import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
//import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Event } from "@mui/icons-material";


const TimeLine = ({timelines=[]}) => {
  return (
    <div>
        <Timeline align="alternate">
            {timelines.map((item,index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{m: "auto 0"}}
                    align ="right"
                    variant="body2"
                    color="text.secondary" >
                       {item.date.toString().split("T")[0]} 
                        </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <Event/>
                        </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: "12px", px:2}}>
                            <Typography variant="h6" component="h1">{item.title}</Typography>
                            <Typography variant="h6" component="h1">{item.description}</Typography>

                        </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>

    </div>
  );
}

export default TimeLine