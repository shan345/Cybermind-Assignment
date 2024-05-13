import React from 'react';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
    palette: {

        common:{
            black: "#000000",
            white: "#FFFFFF",
        },

        primary: {
        main: "#000000",
        },

        secondary: {
        main: "#000000",
        },

        background:{
            default: "#111418"
        },

        text:{
            primary: "#5A5A5A",
            secondary: "#5A5A5A"            
        }
    },
  });

export default theme;
