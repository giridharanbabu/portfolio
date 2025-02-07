import React, { useState } from "react";
import {
  Divider,
 Avatar, Dialog, DialogTitle, DialogContent
} from "@mui/material";

import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from "@mui/joy/Typography";
import CardContent from '@mui/joy/CardContent';

const Experience_list = [
    {
      Company: "DataFabricx",
      Country: "India",
      start:"sep-2023",
      end: "sep-2024",
      years: "2 Years",
      Role: "Data Scientist",
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description:`API Development: Developed RESTful APIs using Python(FastAPI) to enable real-time data retrieval and batch processing; implemented advanced search and filtering to enhance AI search usabilit
            Data Pipeline Automation: Designed and automated ETL pipelines with Python and SQL to integrate data from multiple sources into the vector database, optimizing data ingestion for AI-powered search.
            Machine Learning Pipeline:
            Data Processing: Developed data synchronization process including embedding creation, data chunking, and security mapping.
            OCR Processing: Implemented Optical Character Recognition (OCR) for efficient document extractio
            AI Integration: Built on top of Large Language Models (LLMs), LangChain, FAISS, and Typesense to provide advanced search capabilities.
            Enabled AI-driven features allowing users to interact with documents effectively.
            Deployment: Created Windows service packages using batch scripts and Docker packages for containerized deployment,ensuring efficient and scalable releases across environment`
    },
    {
      Company: "QM",
      Country: "India",
      start:"sep-2023",
      end: "sep-2024",
      years: "2 Years",
      Role: 'Software Engineer (Data Science)',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description:`
            End-to-End Data Pipeline Development: Built comprehensive data pipelines and ETL processes on Google Cloud Platform (GCP) for data ingestion, cleaning, and transformation, preparing datasets for machine learning models and analytics.
            ETL Workflows & Data Migration: Led the design and deployment of ETL workflows for seamless data migration AWS to Snowflake, Cloud Storage, and BigQuery, ensuring secure and efficient data trans
            Infrastructure Automation: Implemented Terraform for GCP resource deployment, reducing setup time by 30% and enhancing infrastructure scalability.
            Automated Data Collection: Developed custom Python scripts to automate data collection from multiple sources,integrated with GCP services for improved processing efficienc
            Data Marts & Business Intelligence: Collaborated with cross-functional teams to develop data marts and Looker dashboards, supporting diverse business needs.
            Recommendation Systems: Designed and implemented content-based and user-based recommendation systems,significantly enhancing user engagement and personalizatio
            Audit Trail System Development: Created an Audit Trail system to monitor and analyze user interactions across storefront applications, providing insights for optimizing user experience and security.
            Automated Reporting: Streamlined reporting by automating report generation in Tableau, improving data accessibility for stakeholders.`

    },
    {
     Company: "Trusfi",
      Country: "India",
      start:"sep-2023",
      end: "sep-2024",
      years: "2 Years",
      Role:'Jr. Data Scientist',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description:`Text Recommendation System: Designed and developed a sophisticated text recommendation system using Keras and NLP techniques, enhancing user engagement and content discovery.
                    Nudity Detection System: Developed a nudity detection system employing advanced image processing and machine learning techniques, ensuring safe content delivery within the application.
                    Deep Learning Models: Leveraged Keras for building and training neural network models, optimizing performance and accuracy in recommendation tasks.
                    Image Processing Techniques: Implemented convolutional neural networks (CNNs) for robust nudity detection,ensuring compliance with content policies.`

    },
  ];
const Experience =() => {

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
            width: "75%",
            bgcolor: "transparent",
            p: 2,
            height: "250px",
            boxShadow: "5px 5px 5px 5px #888888",
            overflowY: "auto",
            border: "3px solid black",
            margin: "10px 20px 0px 10px",
            borderRadius: "10px 10px 10px 10px",
            borderColor: "Background",
            marginTop: "20px",
            // marginLeft: "15px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "left",
            gap: 2

            }}
        >
            
        <Typography variant="h2" fontWeight="bold" mb={0} sx={{ width: "100%", textAlign: "Left" , height: "1px"}}>
            Experience
        </Typography>
        {Experience_list.map((experience, index) =>(
    <Card variant="outlined" sx={{ width: 250, height: "50%",  gap: 2, display: "grid", flexDirection: "column" ,marginLeft: '10px', marginTop: "10px"  }} key={index}>
      <CardOverflow>
        {/* <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio> */}
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          sx={{
            position: 'absolute',
            zIndex: 1,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(60%)',
          }}
        >
          <Avatar />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none" onClick={() => handleClickOpen(experience)}>
            {experience.Company}
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{experience.Country}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">{experience.years}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">{experience.start} {experience.end}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
            ))}
        <Dialog   maxWidth={'md'} open={open} onClose={() => setOpen(false)}>
          
        <DialogTitle sx={{ marginBottom: 0 }}> {selectedJob?.Company}</DialogTitle>
        <DialogTitle  sx={{ marginTop: -4, fontSize: "1rem" }}>({selectedJob?.Role})</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>
            <ul>
            {selectedJob?.description?.split("\n").map((item, idx) =>(
                <li key={idx}>{item.trim()}</li>
            ))
            }
            </ul>
            </Typography>
        </DialogContent>
        
      </Dialog>
        </Card>
    </>
    )
}

export default Experience;