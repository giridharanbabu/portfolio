import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography, Divider } from "@mui/material";

const Contact = () => {
    const [ errors, setErrors] = useState({})
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setformData({
            ...formData,
            [name]: value,
    })
    }
    const handleReset = () => {
        setformData({ name: "", email: "", message: "" });
        setErrors({});
      };
    return(
    <div>
           {/* Header Section */}
            <Box
              sx={{
                textAlign: "center",
                marginBottom: "10px",
                padding: "20px",
              }}
            >
              
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: '"Segoe UI"',
                  color: "black",
                  textAlign: 'center'
                }}
              >         Get In Touch
              </Typography>
      
              <Divider
                sx={{
                  width: "80%", // Make the divider shorter
                  margin: "5px auto", // Center it horizontally
                  borderColor: "#ccc",
                }}
              />
            </Box>
      
        <Box
        sx={{
            display: "flex",
            flexDirection: "row", // Items in a row
            height: "50%",
            width: "100%",
            padding: "1px",
            alignContent: "center",
            // backgroundColor: "#fff",
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
            // gap: "20px",// Space between image and text
            boxSizing: "border-box",
            }}>
        <Box
          sx={{
            width: "70%", // Trim the box size to fit the form
            padding: "20px", // Add padding for spacing
            backgroundColor: "#fff", // Background color for the form box
            // boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)", // Add shadow for separation
            borderRadius: "4px", // Rounded corners
          }}
        >
        
        <Typography
            variant="h5"
            sx={{
            // fontWeight: "bold",
            fontSize: "14px",
            fontFamily: 'Arial',
            color: "black",
            textAlign: 'center'
            }}>
              {/* <br /> */}
          Write to us with your query and we shall get back
        </Typography>
        <Divider  sx={{
            width: "80%", // Make the divider shorter
            margin: "20px auto", // Center it horizontally
            borderColor: "#ccc",
        }}/>
         <form>
             {/* onSubmit={handleSubmit}> */}
        <Grid container spacing={4} sx={{ textAlign: "center", margin: "10px auto"}}>
          {/* Name Field */}
          <Grid item xs={4}>
            <TextField
              label="Name"
              name="name"
               size="small"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={4}>
            <TextField
              label="Email"
              name="email"
              fullWidth
               size="small"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={10}>
            <TextField
              label="Message"
              name="message"
               size="Normal"
              multiline
              rows={3}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>

          {/* Buttons */}
          <Grid
                item
                xs={10} // Span full width
                display="flex"
                justifyContent="flex-end" // Align buttons to the right
                sx={{
                  gap: "10px", // Space between buttons
                }}
              >
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleReset}
              
              sx={{ width: "20%" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "20%"}}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
        </Box>
        </Box>
    </div>
    )
};

export default Contact;