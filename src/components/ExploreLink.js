import React from "react";
import Card from '@mui/joy/Card';
import Typography from "@mui/joy/Typography";
import CardContent from '@mui/joy/CardContent';
import { Box , Divider} from "@mui/material";
import { LinkedIn, GitHub, Link } from "@mui/icons-material";
import { motion } from "framer-motion";

const ExploreLink = ({ show }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "15%",
        bgcolor: "transparent",
        // backgroundColor: "grey",
        p: 2,
        height: "100%",
        boxShadow: "5px 5px 5px 5px #888888",
        overflowY: "auto",
        // border: "3px solid black",
        margin: "10px 0px 10px 0px",
        borderRadius: "10px 10px 10px 10px",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-start",  // Align content to the left
        justifyContent: "flex-start",  // Align content to the left
      }}
    >
      <CardContent sx={{width: "100%"}}>
        <Typography variant="h5" fontWeight="bold">Explore</Typography>
        <Box sx={{ display: "flex",flexDirection: "column", gap: 1 , width:"100%"}}>
          <Typography>
            <a
              href="https://www.linkedin.com/in/giridharan-chandrababu-95a236b1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none", gap: 2,  flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <LinkedIn sx={{ marginRight: 2 }} />
              LinkedIn
            </a>
            
          </Typography>
          <Divider sx={{ width: "100%",my: 1}}  />
          <Typography>
            <a
              href="https://github.com/giridharanbabu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none",gap: 2, flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <GitHub sx={{ marginRight: 2.5 }} />
              GitHub
            </a>
          </Typography>
          <Divider sx={{ width: "100%",my: 1}}  />
          <Typography>
            <a
              href="https://www.linkedin.com/in/giridharan-chandrababu-95a236b1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none", gap: 2,  flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <Link sx={{ marginRight: 2}} />
              My Link
            </a>
          </Typography>
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExploreLink;
