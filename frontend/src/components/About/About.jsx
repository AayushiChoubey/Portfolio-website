import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import image from "../../Images/image.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={image} alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           Aayushi Choubey
          </Typography>

          <Typography>Title</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Subtitle
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Description
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
