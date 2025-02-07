import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/joy";
import Modal from "@mui/joy/Modal";
import { List, ListItem, ListItemDecorator } from "@mui/joy";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SettingsIcon from "@mui/icons-material/Settings";

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
    const rect = event.currentTarget.getBoundingClientRect();
    setAnchorPosition({ top: rect.top, left: rect.right + 10 });
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredCategory(null);
    }, 300);
  };

  return (
    <>
      <Card variant="outlined" sx={{ display: "flex",
            width: "25%",
            bgcolor: "transparent",
            p: 2,
            height: "250px",
            position: "relative",
            boxShadow: "5px 5px 5px 5px #888888",
            overflowY: "autp",
            border: "3px solid black",
            margin: "10px 20px 0px 20px",
            borderRadius: "10px 10px 10px 10px",
            borderColor: "Background",
            marginTop: "20px",
            // marginLeft: "15px",
            flexDirection: "row",
            overflow: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            gap: 3}}>
        <CardContent>
          <Typography variant="h2" fontWeight="bold" mb={3} sx={{ width: "100%", textAlign: "Left" , height: "1px"}} >Skills</Typography>
          <List>
            {Object.entries(skills).map(([category, { icon }]) => (
              <ListItem
                key={category}
                onMouseEnter={(event) => handleMouseEnter(event, category)}
                onMouseLeave={handleMouseLeave}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
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
