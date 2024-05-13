import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseIcon from '@mui/icons-material/Close';
import User from "./User";
import theme from "./Theme/Theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';


function Home() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent="center" alignContent="center" style={{ minHeight: '100vh' }}>
      <Box bgcolor="#FFFFFF" width="319.45px" height="auto" padding="25px" borderRadius="20px" border="1px solid" borderColor="#BCBCBC" opacity="0px">
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <CheckCircleOutlineIcon fontSize="small" sx={{color:"#F28482"}}/>
          </Grid>
          <Grid item>
            <DeleteOutlinedIcon fontSize='small'  sx={{fontSize:16, color:"#F28482"}}/>
            <CloseIcon sx={{fontSize:16, color:"#F28482", marginLeft:"8px"}}/>
          </Grid>
        </Grid>

        <User/>
        
      </Box>
    </Grid>
    </ThemeProvider>
    
  )
}

export default Home


