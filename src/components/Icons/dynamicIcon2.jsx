import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';
import { IoBagCheckSharp } from "react-icons/io5";

const DynamicIcon2 = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLg = useMediaQuery(theme.breakpoints.up('md'));
  
    let iconSize;
    if (isXs) {
      iconSize = 24; // Small size for extra small screens
    } else if (isSm) {
      iconSize = 32; // Medium size for small screens
    } else if (isMd) {
      iconSize = 40; // Large size for medium screens
    } else if (isLg) {
      iconSize = 48; // Extra large size for large screens
    }
  
    return (
      <Grid item xs={6} sm={6} md={2}>
        <IoBagCheckSharp  size={iconSize} color="inherit" />
      </Grid>
    );
  };
  
  export default DynamicIcon2;
  