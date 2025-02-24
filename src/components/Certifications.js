// import React, { useState } from "react";
// import {
//   Divider,
// } from "@mui/material";
// import Card from '@mui/joy/Card';
// import Link from '@mui/joy/Link';
// import CardOverflow from '@mui/joy/CardOverflow'
// import Typography from "@mui/joy/Typography";
// import CardContent from '@mui/joy/CardContent';
// import Modal from "@mui/joy/Modal";



// const modalStyle = {
//   position: "absolute",
//   height: "600px",
//   // width: "800px",
//   // top: "50%",
//   // left: "50%",
//   // right: "30%",
//   transform: "translate(-50%, -50%)",
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "8px",
//   boxShadow: 24,
//   outline: "none",
//   overflow: "auto", // Ensure the content can scroll
//   maxHeight: "90vh", // Limit the height of the modal to 90% of the viewport
//   maxWidth: "90vw", //
// };

// const Certification_list = [
//     {
//       langauge: "Python",
//       Provider: "HackerRank",
//       CertificateId: "859E14BF2F69",
//       img_src: "./python_basic certificate.pdf"
//     },
//     {
//       langauge: "SQL Advanced",
//       Provider: "HackerRank",
//       CertificateId: "C05B2914DB95",
//       img_src: "./sql_advanced certificate.pdf",
    
//     }
//   ];
// const Certifications =() => {

//     const [open, setOpen] = useState(false)
//     const [file, setFile] = useState(null)
//     // const [selectedJob, setSelectedJob] = useState(null)

//     const handleClickOpen = (fileType) => {
//         setFile(fileType);
//         setOpen(true);
//       };

//     const handleClickClose = () => {
//       setOpen(false)
//       setFile(null)
//     }
    
//     return(
//     <>
//      <Card
//       sx={{
//         display: "flex",
//         width: "50%",
        
//         bgcolor: "transparent",
//         // backgroundColor: "grey",
//         p: 2,
//         // height: "100%",
//         height: "250px",
//         boxShadow: "5px 5px 5px 5px #888888",
//         overflowY: "auto",
//         // border: "3px solid black",
//         // margin: "10px 10px 10px 10px",
//         borderRadius: "10px 10px 10px 10px",
//         flexDirection: "column",
//         flexWrap: "wrap",
//         // alignItems: "flex-start",  // Align content to the left
//         // justifyContent: "flex-start",  // Align content to the left
//       }}
//     >
            
//         <Typography variant="h2" fontWeight="bold" mb={0} sx={{ width: "100%", textAlign: "Left" }}>
//             Certifications
//         </Typography>
//         {Certification_list.map((certificate, index) =>(
//     <Card variant="outlined" sx={{  width: 250, height: "50%", display: "flex", flexDirection: "column" ,marginLeft: '10px', marginTop: "20px"   }} key={index}>
//       <CardContent sx={{width: 250, overflowY: "scroll" ,  '&::-webkit-scrollbar': {
//               display:'none'
//             }}}>
//         <Typography level="title-md">
//           <Link href="#multiple-actions" overlay underline="none" onClick={() => handleClickOpen(certificate.img_src)}>
//             {certificate.langauge}
//           </Link>
//         </Typography>
//         <Typography level="body-sm">
//           <Link href="#multiple-actions">{certificate.Provider}</Link>
//         </Typography>
//       </CardContent>
//       <CardOverflow variant="soft">
//         <Divider inset="context" />
//         <CardContent orientation="horizontal"  sx={{ justifyContent: "space-between", width: "100%" }}>
//           <Typography level="body-xs"></Typography>
//           <Divider orientation="vertical" />
//           <Typography level="body-xs">{certificate.CertificateId}</Typography>
//         </CardContent>
//       </CardOverflow>
//     </Card>
//             ))}
//      </Card>
//      <Modal  open={open} onClose={handleClickClose}>
//         <div style={modalStyle}>
//           <Typography variant="h6" sx={{ marginBottom: 2 }}>
//             File Preview
//           </Typography>
//          { file && file.endsWith(".pdf") ? 
//          (<iframe 
//          src={file}
//          style={{height: "450px", width: "100%", overflow:"auto",}}
//          title= 'File Preview'
//           />
//          )

//          : (
//             <Typography>No file selected.</Typography>
//           )}
          
//           {/* <Button variant="outlined" onClick={handleClickClose} sx={{ marginTop: 2 }}>
//             Close Preview
//           </Button> */}
//         </div>
//       </Modal>
//     </>
//     )
// }

// export default Certifications;

import React, { useState } from "react";
import { Divider } from "@mui/material";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Modal from "@mui/joy/Modal";
import "./certification.scss"; // Importing the styles

const Certification_list = [
  {
    langauge: "Python",
    Provider: "HackerRank",
    CertificateId: "859E14BF2F69",
    img_src: "/python_basic certificate.pdf",
  },
  {
    langauge: "SQL Advanced",
    Provider: "HackerRank",
    CertificateId: "C05B2914DB95",
    img_src: "/sql_advanced certificate.pdf",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  // const handleClickOpen = (fileType) => {
  //   setFile(fileType);
  //   console.log(file)
  //   setOpen(true);
  // };
  const handleClickOpen = async (fileType) => {
    try {
    
        // console.log(fileType)
        // const response = await fetch(fileType);
        // if (!response.ok) throw new Error("Failed to load file");
    
        // // Convert response into a blob URL
        // const blob = await response.blob();
        // const fileURL = URL.createObjectURL(blob); 
        // console.log(fileURL)       
        const fileURL = `${window.location.origin}${fileType}`;
        setFile(fileURL);
        setOpen(true);
    }
      catch(error) { console.error("Error loading file:", error)};
  };
  const handleClickClose = () => {
    setOpen(false);
    setFile(null);
  };

  return (
    <>
      <Card className="certifications-card">
        <Typography variant="h2" className="certifications-title">
          Certifications
        </Typography>
       
  <div className="certifications-container">
    {Certification_list.map((certificate, index) => (
      <Card
        className="certification-item"
        key={index}
        sx={{
          minWidth: 200,
          maxWidth: 250,
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <CardContent className="certification-content">
          <Typography level="title-md">
            <Link
              href="#multiple-actions"
              overlay
              underline="none"
              onClick={() => handleClickOpen(certificate.img_src)}
            >
              {certificate.langauge}
            </Link>
          </Typography>
          <Typography level="body-sm">
            <Link href="#multiple-actions">{certificate.Provider}</Link>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal" className="certification-footer">
            <Typography level="body-xs"></Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">{certificate.CertificateId}</Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    ))}
  </div>

      <Modal open={open} onClose={handleClickClose}>
        <div className="modal-style">
          <Typography variant="h6" className="modal-title">
            File Preview
          </Typography>
         
          {file && typeof file === "string" && file.endsWith(".pdf") ? (
            <iframe src={file} className="modal-iframe" title="File Preview" />
            
          ) : (
            <Typography>No file selected.</Typography>
          )}
        </div>
      </Modal>
      </Card>
    </>
  );
};

export default Certifications;
