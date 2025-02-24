import React from "react";
import { Divider } from "@mui/material";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import "./education.scss"; // Importing the SCSS file

const Education_list = [
  {
    Institute: "St Peters College of Engineering & Technology",
    Country: "India",
    start: "Aug-2012",
    end: "May-2016",
    years: "4 Years",
    degree: "Bachelors",
    domain: "Information Technology",
    img_src:
      "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  },
  {
    Institute: "Anna University - MIT Campus",
    Country: "India",
    start: "Aug-2016",
    end: "May-2018",
    years: "2 Years",
    degree: "Masters",
    domain: "Information Technology",
    img_src:
      "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  },
];

const Education = () => {
  return (
    <>
    <Card className="education-box">
      <Typography variant="h4" className="education-title">
        Education
      </Typography>
     
      <div className="education-list">
        {Education_list.map((education, index) => (
          <Card key={index} variant="outlined" className="education-item">
              <CardContent>
                <Typography level="title-md">
                  <Link
                    href="#"
                    overlay
                    underline="none"
                    className="education-institute"
                  >
                     {education.Institute} ({education.degree})
                  </Link>
                </Typography>
                <Typography level="body-sm">{education.Country}</Typography>
              </CardContent>
            <CardOverflow variant="soft">
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography level="body-xs">{education.years}</Typography>
                  <Divider orientation="vertical" />
                  <Typography level="body-xs">
                    {education.start} - {education.end}
                  </Typography>
                </CardContent>
              </CardOverflow>
            
          </Card>
        ))}
      </div>
    </Card>
    </>
  );
};

export default Education;
