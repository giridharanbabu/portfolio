import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper, Avatar, Dialog, DialogTitle, DialogContent
} from "@mui/material";

import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import CardOverflow from '@mui/joy/CardOverflow'
import Favorite from '@mui/icons-material/Favorite';
import AspectRatio from '@mui/joy/AspectRatio';
import CardCover from '@mui/joy/CardCover';
import Typography from "@mui/joy/Typography";
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DialerSipRounded, SafetyDivider } from "@mui/icons-material";
const Certification_list = [
    {
      langauge: "Python",
      Provider: "HackerRank",
      CertificateId: "859E14BF2F69",
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
    },
    {
      langauge: "SQL Advanced",
      Provider: "HackerRank",
      CertificateId: "C05B2914DB95",
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    
    }
  ];
const Certifications =() => {

    const [open, setOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState(null)
    const handleClickOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
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
            Certifications
        </Typography>
        {Certification_list.map((certificate, index) =>(
    <Card variant="outlined" sx={{  width: 250, height: "50%",  gap: 2, display: "grid", flexDirection: "column" ,marginLeft: '10px', marginTop: "10px"   }} key={index}>
      <CardContent sx={{width: 250, overflowY: "scroll" ,  '&::-webkit-scrollbar': {
              display:'none'
            }}}>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none" onClick={() => handleClickOpen(certificate)}>
            {certificate.langauge}
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{certificate.Provider}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal"  sx={{ justifyContent: "space-between", width: "100%" }}>
          <Typography level="body-xs"></Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">{certificate.CertificateId}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
            ))}
        </Card>
    </>
    )
}

export default Certifications;