import React from "react";
import {
  Card,
  Typography,
  Box,
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    category: "Backend Development",
    skills: ["Python", "FastAPI", "Node.js", "Django", "Express"],
  },
  {
    category: "Data Science",
    skills: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
];

const VerticalTimeline = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
      {/* Left Content */}
      {/* <Box sx={{ width: "30%", bgcolor: "lightgray", p: 2 }}>Left Content</Box> */}

      {/* <Divider orientation="vertical" flexItem sx={{ mx: 2 }} /> */}

      {/* Skills Container */}
      <Card 
        sx={{
          width: "100%",
          bgcolor: "transparent",
          p: 2,
          height: "250px",
          boxShadow: "5px 5px 5px 5px #888888",
          overflowY: "auto",
          border: "2px solid black",
        //   margin: "40px 20px 0px 40px",
        marginTop: "20px",
        marginLeft: "10px",
        // marginRight: "-10px",
        borderRadius: "10px 10px 10px 10px",
        borderColor: "Background"
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ width: "100%", textAlign: "Left", height: "1px"}}>
          Skills
        </Typography>
        {/* <Divider sx={{margin: '10px'}}></Divider> */}
        {skillCategories.map((category, index) => (
          <CardContent  variant="outlined" key={index} sx={{ textOverflow:"auto",  gap: 2,marginTop: "10px"  }}>
            <Accordion sx={{ boxShadow: "none" , textOverflow:"auto",  gap: 2, display: "flex", bgcolor: "transparent"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" fontWeight="bold">
                  {category.category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1}>
                  {category.skills.map((skill, skillIndex) => (
                    <Grid item key={skillIndex}>
                      <Box
                        sx={{
                          p: "6px 12px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          bgcolor: "white",
                          display: "inline-block",
                        }}
                      >
                        <Typography variant="body2">{skill}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};

export default VerticalTimeline;
