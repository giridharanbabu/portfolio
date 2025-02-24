import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/joy";
// import { Card, CardContent, Typography } from "@mui/material"
import Modal from "@mui/joy/Modal";
import { List, ListItem, ListItemDecorator } from "@mui/joy";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SettingsIcon from "@mui/icons-material/Settings";
import "./skills.scss"
const skills = {
  "Programming Languages": { icon: <CodeIcon />, items: ["Python", "SQL", "React", "Go (Beginner)"] },
  "Cloud Platforms": { icon: <CloudIcon />, items: ["Google Cloud Platform", "AWS"] },
  "Infrastructure & Automation": { icon: <BuildIcon />, items: ["Terraform", "Docker", "GitOps"] },
  "Data Engineering": { icon: <DataUsageIcon />, items: ["ETL Pipeline Development", "Data Ingestion", "Data Transformation", "Data Quality"] },
  "Machine Learning & NLP": { icon: <AutoGraphIcon />, items: ["Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "GPT", "LangChain", "LLM", "BERT", "Deepseek"] },
  "Databases": { icon: <StorageIcon />, items: ["PostgreSQL", "MongoDB", "Typesense", "BigQuery"] },
  "Data Visualization & BI": { icon: <AutoGraphIcon />, items: ["Streamlit", "pandas", "Jupyter", "Tabulae", "Metabase", "Looker"] },
  "Tools": { icon: <SettingsIcon />, items: ["PyTorch", "FastAPI", "Flask", "Jupyter Notebooks"] }
};

export default function SkillsCard() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event, category) => {
    clearTimeout(window.hoverTimeout);
    const rect = event.currentTarget.getBoundingClientRect();
    setAnchorPosition({ top: rect.top, left: rect.right + 10 });
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    window.hoverTimeout = setTimeout(() => {
      setHoveredCategory(null);
    }, 3000);
  };

  return (
    <>
      <Card variant="outlined" className="custom-box">
     
        <CardContent>
        <Typography  className="skills-typor" >Skills</Typography>
          {/* sx={{ width: "100%", textAlign: "Left" , height: "1px"}} */}
          <List>
            {Object.entries(skills).map(([category, { icon }]) => (
              <ListItem
                key={category}
                onMouseEnter={(event) => handleMouseEnter(event, category)}
                onMouseLeave={handleMouseLeave}
                sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
              >
                <ListItemDecorator>{icon}</ListItemDecorator>
                <Typography>{category}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      
      {hoveredCategory && (
        <Modal open={!!hoveredCategory} hideBackdrop onClose={() => setHoveredCategory(null)}>
          <Card
            variant="outlined"
            sx={{
              position: "absolute",
              top: anchorPosition.top,
              left: anchorPosition.left,
              maxWidth: 250,
              p: 2,
            }}
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <Typography level="h5">{hoveredCategory}</Typography>
              <List>
                {skills[hoveredCategory].items.map((skill) => (
                  <ListItem key={skill}>{skill}</ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
}
// import React, { useState } from "react";
// import { useMediaQuery } from '@mui/material';

// import { Card, CardContent, Typography, Modal } from "@mui/joy";
// import { List, ListItem, ListItemDecorator } from "@mui/joy";
// import CodeIcon from "@mui/icons-material/Code";
// import CloudIcon from "@mui/icons-material/Cloud";
// import StorageIcon from "@mui/icons-material/Storage";
// import BuildIcon from "@mui/icons-material/Build";
// import DataUsageIcon from "@mui/icons-material/DataUsage";
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";
// import SettingsIcon from "@mui/icons-material/Settings";
// import "./skills.scss";

// const skills = {
//   "Programming Languages": { icon: <CodeIcon />, items: ["Python", "SQL", "React", "Go (Beginner)"] },
//   "Cloud Platforms": { icon: <CloudIcon />, items: ["Google Cloud Platform", "AWS"] },
//   "Infrastructure & Automation": { icon: <BuildIcon />, items: ["Terraform", "Docker", "GitOps"] },
//   "Data Engineering": { icon: <DataUsageIcon />, items: ["ETL Pipeline Development", "Data Ingestion", "Data Transformation", "Data Quality"] },
//   "Machine Learning & NLP": { icon: <AutoGraphIcon />, items: ["Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "GPT", "LangChain", "LLM", "BERT", "Deepseek"] },
//   "Databases": { icon: <StorageIcon />, items: ["PostgreSQL", "MongoDB", "Typesense", "BigQuery"] },
//   "Data Visualization & BI": { icon: <AutoGraphIcon />, items: ["Streamlit", "pandas", "Jupyter", "Tabulae", "Metabase", "Looker"] },
//   "Tools": { icon: <SettingsIcon />, items: ["PyTorch", "FastAPI", "Flask", "Jupyter Notebooks"] }
// };

// export default function SkillsCard() {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 });

//   // Detect screen size for responsive handling
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const handleMouseEnter = (event, category) => {
//     if (isMobile) return; // Prevent hover effect on mobile

//     const rect = event.currentTarget.getBoundingClientRect();
//     const modalLeft = Math.min(rect.right + 10, window.innerWidth - 250); // Ensure modal stays within screen width
//     setAnchorPosition({ top: rect.top, left: modalLeft });
//     setHoveredCategory(category);
//   };

//   const handleMouseLeave = () => {
//     setHoveredCategory(null);
//   };

//   return (
//     <>
//       <Card variant="outlined" className="outercontainer">
//         <CardContent>
//           <Typography variant="h2" fontWeight="bold" mb={3} sx={{ width: "100%", textAlign: "left" }}>
//             Skills
//           </Typography>
//           <List>
//             {Object.entries(skills).map(([category, { icon }]) => (
//               <ListItem
//                 key={category}
//                 onMouseEnter={(event) => handleMouseEnter(event, category)}
//                 onClick={() => isMobile && setHoveredCategory(category)} // Open modal on click for mobile
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   cursor: "pointer"
//                 }}
//               >
//                 <ListItemDecorator>{icon}</ListItemDecorator>
//                 <Typography>{category}</Typography>
//               </ListItem>
//             ))}
//           </List>
//         </CardContent>
//       </Card>

//       {/* Modal for Desktop and Mobile */}
//       {hoveredCategory && (
//         <Modal open={!!hoveredCategory} onClose={handleMouseLeave} hideBackdrop={isMobile}>
//           <Card
//             variant="outlined"
//             sx={{
//               position: "absolute",
//               top: isMobile ? "50%" : anchorPosition.top,
//               left: isMobile ? "50%" : anchorPosition.left,
//               transform: isMobile ? "translate(-50%, -50%)" : "none",
//               maxWidth: isMobile ? "90%" : 250,
//               p: 2,
//               backgroundColor: "white",
//               boxShadow: "5px 5px 10px rgba(0,0,0,0.2)"
//             }}
//             onMouseLeave={!isMobile ? handleMouseLeave : undefined}
//           >
//             <CardContent>
//               <Typography level="h5">{hoveredCategory}</Typography>
//               <List>
//                 {skills[hoveredCategory].items.map((skill) => (
//                   <ListItem key={skill}>{skill}</ListItem>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>
//         </Modal>
//       )}
//     </>
//   );
// }
