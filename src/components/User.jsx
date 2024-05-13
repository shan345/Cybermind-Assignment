import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Avatar from '@mui/material/Avatar';
import theme from "./Theme/Theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { styled } from '@mui/material/styles';
import Comment from "./Comment"
import Divider from '@mui/material/Divider';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';


const CustomDateTimePicker = styled(DateTimePicker)({
    '& .MuiInputBase-root': {
      borderRadius: '50px',
    },
  });



export default function User() {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');

    console.log(selectedUser)
    console.log(selectedAvatar)



    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedUser(value);
        
        const avatars = {
            Yukkesh: 'avatar_yukkesh.png',
            Madhesh: 'avatar_madhesh.png',
        };
        setSelectedAvatar(avatars[value]);
    };


  return (
    <ThemeProvider theme={theme}>
    <Box mt="15px">
        <Grid container spacing={2}> 
            <Grid item>
                <TextField variant="outlined" InputProps={{sx: {borderRadius: '50px', width:"320px", height: '44px', color: '#E92C2C', fontSize: '25px', fontWeight:"bold" } }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}> <DemoContainer components={['DateTimePicker']}> <CustomDateTimePicker TextFieldComponent={TextField}/> </DemoContainer> </LocalizationProvider>
            </Grid>

            <Grid item container alignItems="center" justifyContent="space-between">
                <PersonIcon fontSize="small" sx={{color:"#F28482"}}/>
                <Typography color="text.primary" fontStyle= 'italic'>Assign to:</Typography>
                

                <Box sx={{ minWidth: 200, borderRadius:"50px", display: ":flex", flexDirection:"row" }}>
                    <FormControl fullWidth>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" sx={{ display: 'flex', alignItems: 'center' }} value={selectedUser} placeholder='User' sx={{borderRadius:"50px"}} onChange={handleChange}>
                            <MenuItem value={"Yukkesh"} sx={{display:'flex', flexDirection:"row"}}> <Box display="flex" flexDirection="row"> <Avatar sx={{ width: 25, height: 25 }}/> <Typography fontWeight="bold" color="#009379" ml="5px">Yukkesh</Typography></Box></MenuItem>
                            <MenuItem value={"Madhesh"}><Box display="flex" flexDirection="row"><Avatar sx={{ width: 25, height: 25 }}/><Typography fontWeight="bold" color="#009379" ml="5px">Madhesh</Typography></Box></MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item container alignItems="flex-start" justifyContent="space-between">
                
                
                <StickyNote2Icon fontSize="small" sx={{color:"#F28482"}}/>
                <Typography color="text.primary" fontStyle= 'italic'>Note:</Typography>
                <TextField multiline variant="outlined" InputProps={{ sx: {fontSize:"14px",borderRadius: '15px', width:"200px"} }} />
                
            </Grid>
           
        </Grid>
        <Divider sx={{mt:"20px"}} />
        <Comment selectedUser={selectedUser} selectedAvatar={selectedAvatar}/>
    </Box>
    </ThemeProvider>
  )
}
