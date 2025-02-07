import React from "react";
import {
  Divider,
} from "@mui/material";

import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from "@mui/joy/Typography";
import CardContent from '@mui/joy/CardContent';

const Education_list = [
    {
      Institute: "St Peters College of Engineering & Technology",
      Country: "India",
      start:"Aug-2012",
      end: "May-2016",
      years: "4 Years",
      degree: "Bachelors",
      domain: "Information Technology",
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
    },
    {
     Institute: "Anna University -MIT Campus",
      Country: "India",
      start:"Aug-2016",
      end: "May-2018",
      years: "2 Years",
      degree: "Masters",
      domain: 'Information Technology',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    
    }
  ];
const Education =() => {

    // const [open, setOpen] = useState(false)
    // const [selectedJob, setSelectedJob] = useState(null)
    const handleClickOpen = (job) => {
        // setSelectedJob(job);
        // setOpen(true);
      };
    return(
    <>
     <Card
      sx={{
        display: "flex",
        width: "50%",
        
        bgcolor: "transparent",
        // backgroundColor: "grey",
        p: 2,
        // height: "100%",
        height: "250px",
        boxShadow: "5px 5px 5px 5px #888888",
        overflowY: "auto",
        // border: "3px solid black",
        margin: "10px 10px 10px 10px",
        borderRadius: "10px 10px 10px 10px",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",  // Align content to the left
        justifyContent: "flex-start",  // Align content to the left
      }}
    >
            
        <Typography variant="h2" fontWeight="bold" mb={0} sx={{ width: "100%", textAlign: "Left" , height: "1px"}}>
            Education
        </Typography>
        {Education_list.map((education, index) =>(
    <Card variant="outlined" sx={{  width: 250, height: "50%",  gap: 2, display: "grid", flexDirection: "column" ,marginLeft: '10px', marginTop: "10px"   }} key={index}>
      <CardContent sx={{width: 250, overflowY: "scroll" ,  '&::-webkit-scrollbar': {
              display:'none'
            }}}>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none" onClick={() => handleClickOpen(education)}>
            {education.Institute} - ({education.degree})
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{education.Country}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal"  sx={{ justifyContent: "space-between", width: "100%" }}>
          <Typography level="body-xs">{education.years}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">{education.start} {education.end}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
            ))}
        </Card>
    </>
    )
}

export default Education;