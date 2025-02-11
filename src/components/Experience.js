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
      start:" Sep-2023",
      end: "Sep-2024",
      years: "1 Years",
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
      Company: "Quickplay Media",
      Country: "India",
      start:"Jan-2022",
      end: "Sep-2023",
      years: "1.9 Years",
      Role: 'Software Engineer (Data Science)',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description:`End-to-End Data Pipeline Development: Built comprehensive data pipelines and ETL processes on Google Cloud Platform (GCP) for data ingestion, cleaning, and transformation, preparing datasets for machine learning models and analytics.
            ETL Workflows & Data Migration: Led the design and deployment of ETL workflows for seamless data migration AWS to Snowflake, Cloud Storage, and BigQuery, ensuring secure and efficient data trans
            Infrastructure Automation: Implemented Terraform for GCP resource deployment, reducing setup time by 30% and enhancing infrastructure scalability.
            Automated Data Collection: Developed custom Python scripts to automate data collection from multiple sources,integrated with GCP services for improved processing efficienc
            Data Marts & Business Intelligence: Collaborated with cross-functional teams to develop data marts and Looker dashboards, supporting diverse business needs.
            Recommendation Systems: Designed and implemented content-based and user-based recommendation systems,significantly enhancing user engagement and personalizatio
            Audit Trail System Development: Created an Audit Trail system to monitor and analyze user interactions across storefront applications, providing insights for optimizing user experience and security.
            Automated Reporting: Streamlined reporting by automating report generation in Tableau, improving data accessibility for stakeholders.`

    },
    {
      Company: "DataFabricx",
      Country: "India",
      start:"May-2019",
      end: "Jan-2022",
      years: "2.7 Years",
      Role: 'Data Scientist',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description: `ML Document Classification Application: Developed a machine learning application to organize and classify enterprise documents, improving accessibility and structure before migrating to a Document Management System (DMS).
      NLP Document Processing: Applied NLP techniques for in-depth text analysis, enabling precise categorization based on content and metadata.
      Supervised Learning Models: Trained models using Random Forest and SVM algorithms for high-accuracy document classification within the DM
      Unsupervised Clustering: Utilized K-means clustering to group similar documents, streamlining organization and retrieval processes.
      Data Pipeline Development: Designed and maintained ETL pipelines from DMS to Elasticsearch, optimizing workflow and ensuring data consistency.
      Worfklow Automation : Automated repetitive data processing tasks with Python scripts, reducing manual workload and increasing efficienc
      Reporting: Created a 360-degree document reportingdashboard using Kibana, providing real-time insights into document metadata and categorization.`
    },
    {
     Company: "Trusfi",
      Country: "India",
      start:"Oct-2018",
      end: "Dec-2019",
      years: "1.2 Years",
      Role:'Jr. Data Scientist',
      img_src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      description:`Text Recommendation System: Designed and developed a sophisticated text recommendation system using Keras and NLP techniques, enhancing user engagement and content discovery.
                    Nudity Detection System: Developed a nudity detection system employing advanced image processing and machine learning techniques, ensuring safe content delivery within the application.
                    Deep Learning Models: Leveraged Keras for building and training neural network models, optimizing performance and accuracy in recommendation tasks.
                    Image Processing Techniques: Implemented convolutional neural networks (CNNs) for robust nudity detection,ensuring compliance with content policies.`

    },
    
  ];

  const Experience = () => {
    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
  
    const handleClickOpen = (job) => {
      setSelectedJob(job);
      setOpen(true);
    };
  
    return (
      <>
        <Card
          sx={{
            width: "75%",
            height: "250px",
            bgcolor: "transparent",
            p: 2,
            boxShadow: "5px 5px 10px #888888",
            border: "2px solid black",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ textAlign: "left", mb: 2 }}
          >
            Experience
          </Typography>
  
          <div
            style={{
              display: "flex",
              // flexWrap: "nowrap",
              overflowX: "auto",
              gap: "20px",
              height: "200px",
              justifyContent: "flex-start",
              scrollbarWidth: "none", 
            msOverflowStyle: "none", 
            }}
          >
            {Experience_list.map((experience, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  width: "250px",
                  height: "55%",
                  padding: "30px",
                  flexGrow: 1,
                  display: "flex",
                 
                  flexDirection: "column",
                  // justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <CardOverflow>
                  <IconButton
                    aria-label="Profile"
                    size="md"
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: "-1rem",
                      transform: "translateY(100%)",
                    }}
                  >
                    <Avatar />
                  </IconButton>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md">
                    <Link
                      href="#"
                      overlay
                      underline="none"
                      onClick={() => handleClickOpen(experience)}
                    >
                      {experience.Company}
                    </Link>
                  </Typography>
                  <Typography level="body-sm">{experience.Country}</Typography>
                </CardContent>
                <CardOverflow variant="soft">
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography level="body-xs">{experience.years}</Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs">
                      {experience.start} - {experience.end}
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            ))}
          </div>
  
          {/* Dialog for Detailed View */}
          <Dialog maxWidth={"md"} open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{ marginBottom: 0 }}>
              {selectedJob?.Company}
            </DialogTitle>
            <DialogTitle sx={{ marginTop: -2, fontSize: "1rem" }}>
              ({selectedJob?.Role})
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Typography>
                <ul>
                  {selectedJob?.description
                    ?.split("\n")
                    .map((item, idx) => (
                      <li key={idx}>{item.trim()}</li>
                    ))}
                </ul>
              </Typography>
            </DialogContent>
          </Dialog>
        </Card>
      </>
    );
  };

export default Experience;