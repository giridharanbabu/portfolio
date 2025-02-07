import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#394335',
        padding: '10px',
        marginTop: '0px',
      }}
    >
      {/* Centered Footer Content */}
      <Typography
        variant="body1"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: 500,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        © Copyrights
      </Typography>
    </Box>
  );
};

export default Footer;
