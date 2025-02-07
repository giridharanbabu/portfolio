import React from "react";
import {
  Avatar,
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub, Link, Facebook } from "@mui/icons-material";

const Header = styled(Box)({
  background: "transparent",
  padding: "10px 1px",
});

const ProfileContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: "10px",
  padding: "20px",
  background: "transparent",
});

const ProfileAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  border: "3px solid white",
  borderRadius: "50%",
  boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
});

const SmallAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  marginRight: "10px",
  marginTop: "5px"
});

const Headers = ({ setActiveTab }) => {

  // const [selectedTab, setSelectedTab] = useState(0);

  // const handleChange = (event, newValue) => {
    // setSelectedTab(newValue);
    // setActiveTab(newValue);
  // };

  const handleDownload = () => {
    const resumeUrl = "/Giri-RESUME.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "GiriDharan_Chandrababu_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#e8e8e8', color: "black"}}  elevation={3}>
        <Toolbar>
          <SmallAvatar src="./g.jpg" alt="Profile Picture" />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", fontSize: 18 , marginTop: "10px" }}>
            
            PortFolio
         
          </Typography>
          <Typography>
            <a
              href="https://www.linkedin.com/in/giridharan-chandrababu-95a236b1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none", gap: 2,  flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <LinkedIn sx={{ marginRight: 2 }} />
              
            </a>
            
          </Typography>
          <Typography>
            <a
              href="https://github.com/giridharanbabu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none",gap: 2, flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <GitHub sx={{ marginRight: 2.5 }} />
            </a>
          </Typography>
          <Typography>
            <a
              href="https://www.linkedin.com/in/giridharan-chandrababu-95a236b1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none", gap: 2,  flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
            >
              <Link sx={{ marginRight: 2}} />
             
            </a>
          </Typography>
          {/* <Tabs value={activeTab} textColor="inherit"> */}
          {/* <Tabs value={selectedTab} onChange={handleChange} textColor="inherit">
            <Tab label="Profile" />
            <Tab label="Explore" />
            <Tab label="Projects" />
            <Tab label="Work" />
          </Tabs> */}
          {/* <Button variant="contained" color="primary">
            Upload
          </Button> */}
        </Toolbar>
      </AppBar>

      <Header />
      
      <Box
        sx={{
          position: "relative",
          bgcolor: "transparent",
          backgroundImage: `url('./image.png')`,
          padding: "5px",
          paddingBottom: "10px",
          borderRadius: "10px",
          margin: "15px",
          marginTop: "80px",
          boxShadow: "5px 0px 5px 5px #888888",
        }}>
        <ProfileContainer>
          <ProfileAvatar src="./g.jpg" alt="Profile Picture" />
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              borderRadius: "20px",
              width: "500px",
              bgcolor: "transparent",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
            }}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}>
                GiriDharan Chandrababu
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}>
                Data Scientist & AI Engineer
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}>
                Toronto, Canada
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: '30px', marginTop: "10px" }}>
                <Typography>
                  <a
                    href="https://www.linkedin.com/in/giridharan-chandrababu-95a236b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent:"left", alignItems: "center", textDecoration: "none", gap: 2,  flexDirection: "row" ,marginLeft: '10px', marginTop: "10px" }}
                  >
                    <Facebook sx={{ marginRight: 1 }} />
                    
                  </a>
                  
                </Typography>
                <Button variant="outlined" size="small" sx={{ mr: 1,  marginTop: '10px', fontSize: '10px'}} onClick={handleScrollToContact}>
                  Get in touch
                </Button>
              </Box>
            </Box>
          </Card>
        </ProfileContainer>
        <Box sx={{ position: "absolute", bottom: "20px", right: "30px" }}>
          <Button variant="contained" size="small" onClick={handleDownload}>
            Download Resume
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Headers;
