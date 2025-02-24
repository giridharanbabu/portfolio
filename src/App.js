// import './App.css';
// import Headers from './components/Header';
// import { Box, IconButton } from "@mui/material";
// import SkillsCard from './components/Skills';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { motion } from "framer-motion";
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import Certifications from './components/Certifications';
// import Footer from './components/Footer';
// import Contact from './components/FContact';


// function App() {
//   const scrollContainerRef = useRef(null);
//   const sections = useRef([]); // Stores section references
//   const [currentSection, setCurrentSection] = useState(0);

//   // Function to scroll manually by section
//   const scroll = useCallback ((direction) => {
//     if (sections.current.length > 0) {
//       let newIndex = direction === "left" ? currentSection - 1 : currentSection + 1;

//       if (newIndex >= 0 && newIndex < sections.current.length) {
//         const targetSection = sections.current[newIndex];
//         if (targetSection) {
//           scrollContainerRef.current.scrollLeft = targetSection.offsetLeft
//         // targetSection.scrollIntoView({ behavior: "smooth" });
//         setCurrentSection(newIndex);
//         }
//       }
//     }
//   },[currentSection]);

//   // Auto-scroll every 1 min (60,000ms)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       scroll("right");
//     }, 60000);

//     return () => clearInterval(interval);
//   }, [scroll]);

//   return (
//     <>
//        <Box
//         sx={{
//           position: "static",
//           top: 0,
//           width: "100%",
//           zIndex: 10,
//           backgroundColor: "white", // Keep background solid
//           boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Add shadow for better visibility
//         }}
//       >
//         <Headers />
//       </Box>
//       <Box sx={{  position: "relative",width: "100%", overflow: "hidden", display: "flex", alignItems: "center" }}>
        
//         {/* Left Arrow Button */}
//         <IconButton
//           onClick={() => scroll("left")}
//           sx={{  position: "absolute",left: 20, zIndex: 50, background: "rgba(0,0,0,0.5)", color: "white" }}
//         >
//           <ArrowBackIos />
//         </IconButton>

//         {/* Scrollable Content */}
//         <motion.div
//           ref={scrollContainerRef}
//           style={{
//             position: "relative",
//             display: "flex",
//             width: "100%",
//             overflowX: "auto",
//             scrollBehavior: "smooth",
//             scrollbarWidth: "none", // Hide scrollbar for Firefox
//             msOverflowStyle: "none", // Hide scrollbar for IE/Edge
//           }}
//         >
//           {/* Section 1 */}
//           <Box
//             ref={(el) => (sections.current[0] = el)}
//             sx={{ position: "relative", display: "flex", gap: "5px", padding: "10px", minWidth: "100%", justifyContent: "center" }}
//           >
//             <SkillsCard />
//             <Experience />
//           </Box>

//           {/* Section 2 */}
//           <Box
//             ref={(el) => (sections.current[1] = el)}
//             sx={{ display: "flex", gap: "5px", padding: "20px", minWidth: "100%", justifyContent: "center" }}
//           >
//             <Education />
//             <Certifications />
//           </Box>
//           {/* <Box
//             ref={(el) => (sections.current[2] = el)}
//             sx={{ display: "flex", gap: "5px", padding: "10px", minWidth: "100%", justifyContent: "left" }}
//           >
//             <Certification />
//           </Box> */}
//         </motion.div>

//         {/* Right Arrow Button */}
//         <IconButton
//           onClick={() => scroll("right")}
//           sx={{ position: "relative", right: 10, zIndex: 10, background: "rgba(0,0,0,0.5)", color: "white" }}
//         >
//           <ArrowForwardIos />
//         </IconButton>

//       </Box>
//       <Box sx={{ padding: '1rem 1rem', alignItems: 'center', backgroundColor: '#f5f5f5' }} id='contact'>
//         <Contact />
//       </Box>
//       <Footer />
//     </>
//   );
// }

// export default App;
// import 'core-js/stable';
// import 'react-native-url-polyfill/auto';
import './app.scss'; // Import the new SCSS file
import Headers from './components/Header';
import { Box, IconButton, useMediaQuery } from "@mui/material";
import SkillsCard from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Contact from './components/FContact';

function App() {
  const scrollContainerRef = useRef(null);
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // const scroll = useCallback((direction) => {
  //   if (sections.current.length > 0) {
  //     let newIndex = direction === "left" ? currentSection - 1 : currentSection + 1;

  //     if (newIndex >= 0 && newIndex < sections.current.length) {
  //       const targetSection = sections.current[newIndex];
  //       if (targetSection) {
  //         scrollContainerRef.current.scrollLeft = targetSection.offsetLeft;
  //         setCurrentSection(newIndex);
  //       }
  //     }
  //   }
  // }, [currentSection]);
  const scroll = useCallback((direction) => {
    if (sections.current.length > 0) {
      let newIndex = direction === "left" ? currentSection - 1 : currentSection + 1;
  
      if (newIndex >= 0 && newIndex < sections.current.length) {
        const targetSection = sections.current[newIndex];
        if (targetSection) {
          scrollContainerRef.current.scrollTo({
            left: targetSection.offsetLeft,
            behavior: "smooth",
          });
          setCurrentSection(newIndex);
        }
      }
    }
  }, [currentSection]);
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 60000);

    return () => clearInterval(interval);
  }, [scroll]);

  return (
    <>
      <Box className="header-container">
        <Headers />
      </Box>

      <Box className="scroll-container">
        {!isMobile && (
          <IconButton
            onClick={() => scroll("left")}
            className="nav-button"
            sx={{ left: 10 }}
          >
            <ArrowBackIos />
          </IconButton>
        )}

        <motion.div ref={scrollContainerRef} className="scroll-content">
          {/* <Box ref={(el) => (sections.current[0] = el)} className="section">
            <SkillsCard />
            <Experience />
            <Education />
            <Certifications />
          </Box> */}
          <Box ref={(el) => (sections.current[0] = el)} className="section skills-section">
            <SkillsCard />
          </Box>

          <Box ref={(el) => (sections.current[1] = el)} className="section experience-section">
            <Experience />
          </Box>

          <Box ref={(el) => (sections.current[2] = el)} className="section education-section">
            <Education />
          </Box>

          <Box ref={(el) => (sections.current[3] = el)} className="section certifications-section">
            <Certifications />
          </Box>
          {/* <Box ref={(el) => (sections.current[0] = el)} className="section">
            <Education />
          </Box>
          <Box ref={(el) => (sections.current[0] = el)} className="section">
            <Certifications />
          </Box> */}
        </motion.div>

        {!isMobile && (
          <IconButton
            onClick={() => scroll("right")}
            className="nav-button"
            sx={{ right: 10 }}
          >
            <ArrowForwardIos />
          </IconButton>
        )}
      </Box>

      <Box sx={{ padding: '1rem', backgroundColor: '#f5f5f5' }} id='contact'>
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
