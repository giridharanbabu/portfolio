import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography, Divider } from "@mui/material";
import "./fcontact.scss";

const Contact = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
        if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            handleReset();
        }
    };

    return (
        <div>
            {/* Header Section */}
            <Box className="header-box">
                <Typography variant="h5" className="header-typor">
                    Get In Touch
                </Typography>
                <Box display="flex" justifyContent="center">
                      <Divider className="header-div" />
                </Box>
            </Box>

            <Box className="outerbox">
                <Box className="inner-box">
                    <Typography className="inner-typo">
                        Write to us with your query and we shall get back
                    </Typography>
                    <Box display="flex" justifyContent="center">
                      <Divider className="header-div" />
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4} sx={{ textAlign: "center", margin: "10px auto" }}>
                            {/* Name Field */}
                            <Grid item xs={10} sm={4}>
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
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    size="small"
                                    fullWidth
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
                                    size="small"
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
                            <Grid item xs={10} display="flex" justifyContent="flex-end" sx={{ gap: "10px" }}>
                                <Button variant="outlined" color="secondary" onClick={handleReset} sx={{ width: "20%" }}>
                                    Clear
                                </Button>
                                <Button variant="contained" color="primary" type="submit" sx={{ width: "20%" }}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;
